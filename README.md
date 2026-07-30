# RAUNAQ - boutique officielle

Site e-commerce statique premium pour **RAUNAQ**, avec expérience multilingue arabe, français, anglais et espagnol.

## Fichiers principaux

- `index.html` - structure HTML, SEO, CSP et balises de sécurité navigateur.
- `styles.css` - design responsive moderne, sections boutique, bénéfices, ingrédients, FAQ et barre d'achat sticky.
- `app.js` - traduction multilingue, changement RTL/LTR, quantité produit et lien de commande.
- `site.webmanifest` - configuration web app/mobile.
- `A.png`, `Logo.png`, `B.png`, `C.png`, `E.png`, `f.png`, `R.png`, `o.png` - visuels produit et marque.

## Sécurité et protection

Le site est statique et ne traite pas encore de paiement directement. Les protections ajoutées sont adaptées à GitHub Pages :

- Content Security Policy restrictive via balise meta.
- JavaScript et CSS séparés pour éviter les scripts/styles inline.
- Blocage des objets embarqués et limitation des sources externes.
- Referrer policy `strict-origin-when-cross-origin`.
- Permissions policy désactivant caméra, micro, géolocalisation, paiement natif et USB.
- Pas de `innerHTML`, pas de `eval`, pas de dépendances JavaScript tierces.

Pour une vraie boutique avec paiement, utilisez Stripe Checkout, Shopify ou WooCommerce au lieu de collecter les cartes bancaires sur GitHub Pages.

## Voir en local

Ouvrez `index.html` dans un navigateur, ou lancez :

```bash
python -m http.server 8000
```

puis ouvrez `http://localhost:8000`.

## Déploiement GitHub Pages

Le site est prévu pour être servi depuis la branche `main`, dossier racine `/`.

URL actuelle : `https://bayaya-devi.github.io/Raunaq/`

## Préparation backend

Le formulaire de commande fonctionne aujourd’hui côté frontend : il génère une référence locale et prépare un payload JSON structuré. Quand un backend sera disponible, renseignez `ORDER_API_ENDPOINT` dans `app.js` avec l’URL API de création de commande. Le payload contient `product`, `customer`, `locale`, `source` et `createdAt`.
