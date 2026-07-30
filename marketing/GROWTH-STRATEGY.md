# RAUNAQ Growth Strategy - 90 Days

## Objective
Build a credible direct-to-consumer acquisition system before scaling paid traffic. The primary conversion is a completed order request; the secondary conversions are WhatsApp contact and qualified social engagement.

## Current Diagnosis
- Strong visual product identity and multilingual experience.
- Clear 390 MAD price and 250 g format.
- No verified testimonials, clinical evidence, shipping policy, payment method or real contact details in the repository.
- Order requests are frontend-only until an API or WhatsApp destination is configured.
- Social links and phone number are placeholders and must be replaced before promotion.

## Positioning
For Moroccan men seeking a carefully presented wellness supplement, RAUNAQ offers a premium 250 g formula with clear product information and a direct multilingual ordering experience.

This position deliberately avoids medical outcomes until product-specific evidence and regulatory review are available.

## Audience Hypotheses
1. Urban Arabic/French-speaking men, 25-45, already buying wellness products online.
2. Gift buyers looking for premium presentation.
3. Moroccan diaspora visitors using French, English or Spanish.

Treat these as hypotheses. Validate with 15 customer interviews and order-source data before narrowing creative or media spend.

## Offer Architecture
- Core: one 250 g pot at 390 MAD.
- Confirmation: availability, delivery fee, payment method and total confirmed before final sale.
- Future tests after margin validation: two-pot bundle, reorder reminder, gift bundle.
- Do not use countdowns, fake stock alerts or crossed-out prices unless the previous price is genuine and documented.

## Funnel
Awareness -> Product page -> Product inspection -> Order request -> Confirmation -> Delivery -> Follow-up -> Reorder/referral.

### Required Backend Contract
`POST /orders` with product SKU, quantity, locale, attribution and customer details. Server must validate, rate-limit, protect CSRF where cookie auth is used, encrypt data at rest, and return a non-sequential public reference.

## 90-Day Roadmap

### Days 1-14: Foundation
- Replace placeholder WhatsApp number and social handles.
- Confirm legal entity, address, delivery zones, fees, payment methods and return policy.
- Validate product label, ingredients and claims with qualified regulatory counsel.
- Connect order API or an approved WhatsApp order flow.
- Install privacy-respecting analytics and verify events.
- Collect five genuine customer interviews; publish no testimonial without consent.

### Days 15-30: Organic Validation
- Publish 4 short videos per week on Instagram and TikTok.
- Publish 2 educational carousels per week.
- Test three message angles: product clarity, premium presentation, ordering simplicity.
- Use unique UTM links per platform and creative.
- Target 100 qualified visits per angle before judging performance.

### Days 31-60: Conversion Tests
- A/B test factual hero headline and CTA wording.
- Test product-detail image order and long vs short order form.
- Add verified FAQs from real customer questions.
- Launch an abandoned-request reminder only with explicit opt-in.

### Days 61-90: Controlled Scale
- Start paid media only after order fulfillment and contribution margin are known.
- Test Meta and TikTok separately with two creatives each.
- Approve platform, daily budget and duration before launch.
- Stop any ad set that exceeds the pre-approved cost-per-confirmed-order threshold.

## Channel Priority
1. Instagram: premium product presentation and direct messaging.
2. TikTok: demonstrations, packaging close-ups and customer questions.
3. WhatsApp: assisted conversion and confirmation.
4. Facebook: retargeting and older audience reach after tracking is ready.
5. SEO/GEO: product entity, FAQs, transparent sourcing and authoritative citations.
6. Email: post-order and reorder lifecycle after consent capture.

## Consumer Protection
Morocco's Ministry of Industry and Commerce states that Law 31-08 requires clear, objective and fair information on price, labeling and conditions of sale, and recognizes information and withdrawal rights in applicable cases. Operational policies must be reviewed before launch: https://www.mcinet.gov.ma/fr/content/protection-du-consommateur

ONSSA resources should be used to validate labeling and product conformity before expanding claims: https://www.onssa.gov.ma/reglementation/reglementation-transversale/conformite-des-produits/

## Decisions Blocked on Real Business Data
- Real WhatsApp number and social handles.
- Delivery coverage, cost and timeframe.
- Payment methods, returns and withdrawal implementation.
- Ingredient list, manufacturer/importer identity and product registration evidence.
- Unit economics, inventory and fulfillment capacity.
- Consent and sender identity for email/SMS campaigns.