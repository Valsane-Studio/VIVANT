# VIVANT — Découvertes animales et végétales

Une création Valsane Studio. Application web progressive (PWA) en français. Une découverte scientifique visuelle par ouverture, sans compte, publicité ni base de données.

## Version claire — nouveautés

- Design clair et minimaliste pour Valsane Studio : fond crème très pâle, cartes blanches, typographie sombre et séparateurs fins.
- **100 découvertes**, avec une revue éditoriale pour réduire les sujets redondants : 11 fiches proches remplacées par des phénomènes distincts et documentés. Chaque fiche possède un texte court, un mécanisme scientifique, une source consultable, un approfondissement et un lexique.
- **En savoir plus** : un paragraphe approfondi, écrit spécifiquement pour chaque fait, à dérouler si on le souhaite.
- **Petit lexique** en bas de chaque fiche : plusieurs notions expliquées en français simple.
- **Photographies supplémentaires** : la photo d'ouverture vient de la page encyclopédique de référence ; quand Wikimedia Commons renvoie des images répondant à la recherche du nom scientifique, une galerie de miniatures apparaît. Jusqu'à 5 photos pertinentes ; si la recherche ne trouve rien, la galerie n'invente pas de photo. On peut toucher une miniature et ouvrir la photo en grand. Un lien permet de consulter l'auteur et les conditions de licence de chaque cliché.
- Favoris locaux, partage natif quand disponible, filtres animaux/plantes et tirage sans répétition par catégorie. Aucun compteur de progression du type « 28/100 » n'est affiché en haut des fiches.

## Accès aux photos

Les **textes, le lexique et le fonctionnement général** sont disponibles hors ligne après la première ouverture sur un site HTTPS (grâce au service worker). Les photographies sont chargées sur Internet : la galerie n'est pas garantie hors ligne. Certaines images peuvent être indisponibles selon la connectivité et les disponibilités Wikimedia. L'application n'utilise pas les clichés pour entraîner une IA et ne transmet pas de profil personnel ; l'affichage des photographies provoque toutefois des requêtes ordinaires vers Wikipedia et Wikimedia Commons.

## Installer / tester

Ouvrir `index.html` (avec `facts.js` et `insights.js` dans le même répertoire) dans un navigateur pour un test ; **l'installation PWA et les caches hors ligne exigent HTTPS ou localhost**. Pour développer localement :

```bash
python3 -m http.server 8080
```

Puis aller sur http://localhost:8080.

## Publier sur GitHub Pages

Transférer le contenu de ce dossier à la racine d'un dépôt GitHub et activer **Settings → Pages → Deploy from a branch → main / root**. Ouvrir la page HTTPS depuis Chrome Android puis utiliser le bouton Installer quand il est pris en charge.

## Modifier les textes

- `facts.js` : données de base (source, organisme, fait, mécanisme, terme principal)
- `insights.js` : approfondissement et définitions par découverte
- `index.html` : interface et chargement des photos à partir de l'API Wikipédia / Wikimedia Commons
- `sw.js` : version du cache PWA à incrémenter en cas de mise à jour

Les organismes mentionnés sont documentés par des sources externes ; les institutions citées n'ont aucun partenariat avec l'application.