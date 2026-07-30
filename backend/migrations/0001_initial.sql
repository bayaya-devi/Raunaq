PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS products (
  sku TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  format TEXT NOT NULL,
  unit_price_mad INTEGER NOT NULL CHECK (unit_price_mad >= 0),
  stock_on_hand INTEGER NOT NULL DEFAULT 0 CHECK (stock_on_hand >= 0),
  active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  reference TEXT NOT NULL UNIQUE,
  idempotency_key TEXT NOT NULL UNIQUE,
  sku TEXT NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity BETWEEN 1 AND 99),
  unit_price_mad INTEGER NOT NULL CHECK (unit_price_mad >= 0),
  total_price_mad INTEGER NOT NULL CHECK (total_price_mad >= 0),
  currency TEXT NOT NULL DEFAULT 'MAD',
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_city TEXT NOT NULL,
  customer_note TEXT,
  locale TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'confirmed', 'prepared', 'shipped', 'delivered', 'cancelled')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sku) REFERENCES products(sku)
);

CREATE INDEX IF NOT EXISTS idx_orders_status_created_at ON orders(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_phone ON orders(customer_phone);

INSERT OR IGNORE INTO products (sku, name, format, unit_price_mad, stock_on_hand, active)
VALUES ('RAUNAQ-ROYAL-250G', 'RAUNAQ Royal Formula', '250g', 390, 0, 1);