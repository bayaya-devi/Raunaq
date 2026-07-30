interface D1Meta { changes?: number }
interface D1Result<T = unknown> { results?: T[]; meta: D1Meta }
interface D1Statement { bind(...values: unknown[]): D1Statement; run<T = unknown>(): Promise<D1Result<T>>; first<T = unknown>(): Promise<T | null> }
interface D1Database { prepare(query: string): D1Statement; batch<T = unknown>(statements: D1Statement[]): Promise<D1Result<T>[]> }
interface Queue<T> { send(message: T): Promise<void> }
interface RateLimit { limit(options: { key: string }): Promise<{ success: boolean }> }
interface ExecutionContext { waitUntil(promise: Promise<unknown>): void }
interface Env { DB: D1Database; ORDER_QUEUE: Queue<OrderQueueMessage>; ORDER_RATE_LIMITER: RateLimit; ALLOWED_ORIGIN?: string; TURNSTILE_SECRET?: string }
interface OrderQueueMessage { orderId: string; reference: string }
interface OrderInput { requestId?: unknown; product?: { sku?: unknown; quantity?: unknown }; customer?: { name?: unknown; phone?: unknown; city?: unknown; note?: unknown }; locale?: unknown; turnstileToken?: unknown }
interface ExistingOrder { reference: string; status: string }

const PRODUCT = { sku: 'RAUNAQ-ROYAL-250G', format: '250g', unitPrice: 390, currency: 'MAD' } as const;
const JSON_HEADERS = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' };

function json(body: unknown, status = 200, headers: HeadersInit = {}): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...JSON_HEADERS, ...headers } });
}

function requestId(request: Request): string {
  const incoming = request.headers.get('x-idempotency-key')?.trim();
  return incoming && /^[A-Za-z0-9_-]{16,128}$/.test(incoming) ? incoming : crypto.randomUUID();
}

function text(value: unknown, min: number, max: number): string | null {
  return typeof value === 'string' && value.trim().length >= min && value.trim().length <= max ? value.trim() : null;
}

function allowedOrigin(request: Request, env: Env): string | null {
  const origin = request.headers.get('Origin');
  if (!origin) return null;
  return env.ALLOWED_ORIGIN === origin ? origin : null;
}

function cors(request: Request, env: Env): HeadersInit {
  const origin = allowedOrigin(request, env);
  return origin ? { 'access-control-allow-origin': origin, vary: 'Origin', 'access-control-allow-methods': 'POST, OPTIONS', 'access-control-allow-headers': 'content-type, x-idempotency-key', 'access-control-max-age': '86400' } : {};
}

function clientKey(request: Request): string {
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'anonymous';
}

async function verifyTurnstile(token: unknown, request: Request, env: Env): Promise<boolean> {
  if (!env.TURNSTILE_SECRET) return true;
  if (typeof token !== 'string' || token.length < 20) return false;
  const form = new FormData();
  form.set('secret', env.TURNSTILE_SECRET);
  form.set('response', token);
  const ip = request.headers.get('cf-connecting-ip');
  if (ip) form.set('remoteip', ip);
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

function validateOrder(input: OrderInput): { ok: true; value: { idempotencyKey: string; quantity: number; name: string; phone: string; city: string; note: string | null; locale: string; token: unknown } } | { ok: false; message: string } {
  const idempotencyKey = typeof input.requestId === 'string' && /^[A-Za-z0-9_-]{16,128}$/.test(input.requestId) ? input.requestId : null;
  const quantity = Number(input.product?.quantity);
  const name = text(input.customer?.name, 2, 80);
  const phone = text(input.customer?.phone, 8, 20);
  const city = text(input.customer?.city, 2, 80);
  const note = input.customer?.note == null || input.customer.note === '' ? null : text(input.customer.note, 1, 500);
  const locale = typeof input.locale === 'string' && ['ar', 'fr', 'en', 'es'].includes(input.locale) ? input.locale : 'ar';
  if (input.product?.sku !== PRODUCT.sku) return { ok: false, message: 'Unknown product.' };
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) return { ok: false, message: 'Invalid quantity.' };
  if (!name || !phone || !city || (input.customer?.note && !note)) return { ok: false, message: 'Invalid customer details.' };
  return { ok: true, value: { idempotencyKey: idempotencyKey || crypto.randomUUID(), quantity, name, phone, city, note, locale, token: input.turnstileToken } };
}

async function createOrder(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const headers = cors(request, env);
  if (request.headers.get('Origin') && !allowedOrigin(request, env)) return json({ error: 'Origin not allowed.' }, 403, headers);
  if (request.headers.get('content-length') && Number(request.headers.get('content-length')) > 16_384) return json({ error: 'Payload too large.' }, 413, headers);

  const limited = await env.ORDER_RATE_LIMITER.limit({ key: `orders:${clientKey(request)}` });
  if (!limited.success) return json({ error: 'Too many requests. Please try again shortly.' }, 429, { ...headers, 'retry-after': '60' });

  let input: OrderInput;
  try { input = (await request.json()) as OrderInput; } catch { return json({ error: 'Invalid JSON.' }, 400, headers); }
  const validation = validateOrder(input);
  if (!validation.ok) return json({ error: validation.message }, 400, headers);
  if (!(await verifyTurnstile(validation.value.token, request, env))) return json({ error: 'Verification failed.' }, 400, headers);

  const existing = await env.DB.prepare('SELECT reference, status FROM orders WHERE idempotency_key = ?').bind(validation.value.idempotencyKey).first<ExistingOrder>();
  if (existing) return json({ reference: existing.reference, status: existing.status, duplicate: true }, 200, headers);

  const id = crypto.randomUUID();
  const reference = `RQ-${crypto.randomUUID().replaceAll('-', '').slice(0, 10).toUpperCase()}`;
  const total = PRODUCT.unitPrice * validation.value.quantity;
  const statements = [
    env.DB.prepare('UPDATE products SET stock_on_hand = stock_on_hand - ?, updated_at = CURRENT_TIMESTAMP WHERE sku = ? AND active = 1 AND stock_on_hand >= ?').bind(validation.value.quantity, PRODUCT.sku, validation.value.quantity),
    env.DB.prepare('INSERT INTO orders (id, reference, idempotency_key, sku, quantity, unit_price_mad, total_price_mad, currency, customer_name, customer_phone, customer_city, customer_note, locale) SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? WHERE changes() = 1').bind(id, reference, validation.value.idempotencyKey, PRODUCT.sku, validation.value.quantity, PRODUCT.unitPrice, total, PRODUCT.currency, validation.value.name, validation.value.phone, validation.value.city, validation.value.note, validation.value.locale)
  ];
  const result = await env.DB.batch(statements);
  if ((result[1]?.meta.changes || 0) !== 1) return json({ error: 'Product unavailable.' }, 409, headers);
  ctx.waitUntil(env.ORDER_QUEUE.send({ orderId: id, reference }).catch(() => undefined));
  return json({ reference, status: 'new', totalPrice: total, currency: PRODUCT.currency }, 201, headers);
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const headers = cors(request, env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
    if (url.pathname === '/api/health' && request.method === 'GET') {
      try { await env.DB.prepare('SELECT 1').first(); return json({ ok: true }, 200, headers); }
      catch { return json({ ok: false }, 503, headers); }
    }
    if (url.pathname === '/api/orders' && request.method === 'POST') return createOrder(request, env, ctx);
    return json({ error: 'Not found.' }, 404, headers);
  }
};