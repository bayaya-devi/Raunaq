# RAUNAQ Cloudflare backend

This Worker exposes `POST /api/orders` and `GET /api/health`.

## Create Cloudflare resources

Run these commands from `backend/` after `npx wrangler login`:

```bash
npx wrangler d1 create raunaq
npx wrangler queues create raunaq-orders
```

Copy the D1 `database_id` into `wrangler.jsonc`, then apply the migration:

```bash
npm install
npm run db:migrate:remote
npm run deploy
```

Set the production origin and Turnstile secret before deployment:

```bash
npx wrangler secret put TURNSTILE_SECRET
```

Set `ALLOWED_ORIGIN` to the exact public storefront origin. When the storefront moves to Cloudflare, use the same domain and call `/api/orders`; no CORS configuration is then needed.

## Before accepting orders

The seed product has stock `0` deliberately. Set the real stock only after packaging and inventory are confirmed:

```sql
UPDATE products SET stock_on_hand = 100 WHERE sku = 'RAUNAQ-ROYAL-250G';
```

The Worker ignores browser prices, validates the SKU and quantity, decrements stock and creates the order in one D1 batch transaction. A client retry with the same `requestId` is idempotent.

## Security boundaries

- Validate Turnstile server-side when `TURNSTILE_SECRET` is configured.
- Apply Worker rate limiting before database writes.
- Store all credentials as Wrangler secrets, never in the frontend.
- Restrict CORS to `ALLOWED_ORIGIN`.
- Protect the future admin application with Cloudflare Access.
- Do not handle card numbers; use a payment provider hosted checkout and validate signed webhooks in a separate route.

## Queue consumer

`ORDER_QUEUE` receives only `{ orderId, reference }`. Add a separate consumer Worker for WhatsApp, email, invoices and delivery integrations; it should load the order from D1 rather than placing customer PII in queue messages.