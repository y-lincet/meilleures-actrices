# 🎬 Top 5 des meilleures actrices - Accordéon Interactif (jQuery)

Mini-application web interactive présentant un classement de 5 actrices et leur sélection de films à travers un accordéon horizontal animé en **jQuery**.

## ✨ Fonctionnalités

- **Accordéon horizontal interactif** : clic sur un panneau pour étendre la fiche et révéler la filmographie associée.
- **Effet visuel noir & blanc vers couleur** : sprites horizontaux (`background-position`) avec glissement animé de l'image couleur par-dessus la version noir et blanc (`animate()` jQuery).
- **Navigation double** : sélection possible directement depuis les portraits de l'accordéon ou via la barre de boutons en bas de page (avec effet de survol `.hovered`).
- **Fiche ouverte par défaut** : la 3ᵉ fiche (**Jessica Alba**) s'ouvre automatiquement au chargement de la page.
- **Typographies Google Fonts** : polices *Limelight* et *Lobster* chargées via Google Fonts.

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

1. Clonez ou téléchargez le dépôt
2. Ouvrez `index.html` dans votre navigateur web (ou lancez un serveur local comme *Live Server* dans VS Code)

## 🛠️ Technologies utilisées

- **HTML5**
- **CSS3**
- **jQuery** (via CDN Google)
- **Google Fonts** (*Limelight*, *Lobster*)
