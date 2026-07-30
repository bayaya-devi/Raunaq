# RAUNAQ (رونق) — الخلطة الملكية

Landing page premium pour la marque de compléments alimentaires naturels **RAUNAQ**, destinée aux hommes de 25 à 45 ans.

## Contenu

- `index.html` — page unique (one-page), en arabe (RTL), avec navigation transparente sticky, animations au scroll et barre de commande fixe.
- `images/` — visuels du produit, des bénéfices, des ingrédients et de la marque.

## Utilisation

Aucune installation nécessaire : c'est un site statique HTML/CSS/JS pur (aucune dépendance à builder).

### Voir en local
Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur local :

```bash
python3 -m http.server 8000
```

puis ouvrez `http://localhost:8000`.

### Déployer avec GitHub Pages

1. Poussez ce dossier dans un repo GitHub.
2. Allez dans **Settings → Pages**.
3. Source : **branche `main`**, dossier **`/ (root)`**.
4. Le site sera disponible à `https://<votre-utilisateur>.github.io/<nom-du-repo>/`.

## Structure

```
.
├── index.html
├── README.md
└── images/
    ├── A.png   (produit / packaging)
    ├── B.png   (fertilité)
    ├── C.png   (énergie)
    ├── E.png   (stress / mood)
    ├── f.png   (immunité)
    ├── Logo.png
    ├── R.png   (ingrédients)
    └── o.png   (avertissement)
```

## Personnalisation

- **Couleurs & typographies** : variables CSS définies en haut du fichier `index.html` (`:root`).
- **Textes** : directement dans le HTML, sections balisées par commentaires (`<!-- HERO -->`, `<!-- BENEFITS -->`, etc.).
- **Lien du bouton "اطلب الآن"** : actuellement en `href="#"` — à remplacer par le lien Shopify / checkout réel.
