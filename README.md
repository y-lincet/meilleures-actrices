# 🎬 Top 5 des meilleures actrices

Mini-application web interactive présentant un classement de 5 actrices et leur sélection de films à travers un accordéon horizontal animé en **jQuery**.

## ✨ Fonctionnalités

- **Accordéon animé** : cliquer sur un portrait ou sur un bouton en bas de page déploie la fiche de l'actrice et fait glisser la version couleur par-dessus l'image noir & blanc.
- **Sprites CSS** : les 5 portraits sont découpés dans deux images uniques (noir & blanc et couleur) via `background-position`.
- **Ouverture par défaut** : la fiche centrale s'ouvre automatiquement au chargement de la page.

## 🗂️ Structure du projet

```
meilleures-actrices/
├── css/
│   └── styles.css
├── images/
│   ├── background.jpg
│   ├── bw-image.jpg
│   └── color-image.jpg
├── js/
│   └── script.js
├── index.html
└── README.md
```

## 🚀 Exécution en local

Aucune installation de dépendances n'est nécessaire (jQuery 3.7.1 est chargé via CDN dans `index.html`):

1. Cloner ou télécharger le dépôt
2. Ouvrer `index.html` dans le navigateur web (ou lancer un serveur local comme *Live Server* dans VS Code)

## 🛠️ Technologies utilisées

- **HTML5**
- **CSS3**
- **jQuery** (via CDN Google)
