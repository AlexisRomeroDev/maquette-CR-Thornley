Je pense que c'est une excellente idée. Cela nous donnera un **cahier des charges de référence** auquel nous pourrons nous raccrocher tout au long du projet.

---

# POC – Catalogue raisonné numérique
**Concevoir un langage graphique et éditorial destiné aux catalogues raisonnés numériques, où la forme s'efface au profit de la recherche scientifique, de la qualité des reproductions et du confort de lecture.**

## Contexte

Le présent travail constitue le **Proof of Concept** d'un futur environnement de publication de catalogues raisonnés d'artistes.

Le contenu fourni (biographie, parcours artistique, présentation du musée...) est un **brouillon éditorial** destiné à devenir la page d'introduction d'un catalogue raisonné consacré à William Thornley.

Les **fiches œuvres existent déjà** et ne font **pas** partie de ce POC. L'objectif n'est donc pas de concevoir une base de données d'œuvres mais de créer une **page éditoriale de présentation** qui introduit le catalogue.

Le POC devra néanmoins poser des fondations suffisamment solides pour pouvoir être réutilisé pour d'autres artistes.

---

# Objectif

Créer une page HTML statique présentant un artiste dans un esprit proche d'un **ouvrage scientifique illustré**, et non d'un site institutionnel classique.

Le visiteur doit avoir la sensation de consulter une publication éditoriale plus qu'une page web.

L'objectif est de privilégier :

* le confort de lecture ;
* la mise en valeur des œuvres ;
* la sobriété ;
* la pérennité du code ;
* la réutilisabilité.

---

# Philosophie générale

Le projet ne cherche pas à produire un site spectaculaire.

Au contraire, tout doit être au service du contenu.

Les œuvres et les textes doivent rester les éléments principaux.

Le design doit disparaître au profit de la lecture.

---

# Références

Le rendu doit évoquer davantage :

* un catalogue d'exposition ;
* une publication scientifique ;
* un ouvrage d'histoire de l'art.

Plutôt que :

* un site vitrine ;
* un magazine ;
* un blog ;
* une galerie commerciale.

---

# Direction artistique

Le vocabulaire graphique repose sur quelques principes simples :

* grands espaces blancs ;
* colonne de lecture relativement étroite ;
* typographie élégante ;
* couleurs très discrètes ;
* hiérarchie visuelle très claire ;
* rythme de lecture calme.

L'ensemble doit inspirer la confiance, la rigueur scientifique et la qualité éditoriale.

---

# Identité visuelle

Palette volontairement réduite.

Exemple :

```css
Fond          #faf8f5
Texte         #222222
Secondaire    #666666
Liserés       #ddd8d2
Accent         vert sauge discret
```

Aucune couleur vive.

---

# Typographie

## Titres

Google Font :

**Cormorant Garamond**

Utilisation :

* H1
* H2
* citations
* grandes dates

---

## Texte

Google Font :

**Source Serif 4**

Utilisation :

* paragraphes
* légendes
* notes
* bibliographie

---

# Architecture de la page

La page est composée de plusieurs grands blocs.

```
Hero

↓

Présentation

↓

Qui est William Thornley ?

↓

Parcours artistique

↓

Le musée William Thornley

↓

Notes

↓

Bibliographie
```

Chaque partie constitue un véritable chapitre.

---

# Navigation

Sur ordinateur :

Sommaire latéral fixe.

Le chapitre actif est mis en évidence durant le défilement.

Sur mobile :

Sommaire repliable.

---

# Mise en page

Largeur maximale :

≈ 1100 px

Largeur de lecture :

≈ 760–820 px

Les images peuvent dépasser cette largeur lorsqu'elles constituent un élément important.

---

# Les œuvres

Les illustrations constituent un élément essentiel de la narration.

Toutes les images doivent utiliser la balise :

```html
<figure>

    <img>

    <figcaption>

</figcaption>

</figure>
```

Les légendes remplacent les actuels :

```
Photo :
Autoportrait
```

---

# Illustration
Toutes les images sont issues du domaine https://www.mareetmartin.com/

## Types d'illustrations

Trois familles sont prévues.

### Portrait

```
▌
▌
▌
```

---

### Paysage

```
━━━━━━━━━━━━━━
```

---

### Galerie

```
□ □

□ □
```

Le CSS gère automatiquement leur présentation.

---

# Les légendes

Présentation souhaitée.

```
Figure 12

Autoportrait,
vers 1899.

Collection privée.
```

Les numéros pourront être générés automatiquement.

---

# Les chapitres

Chaque période importante devient une véritable ouverture de chapitre.

Exemple.

```
━━━━━━━━━━━━━━━━━━━━━━

1878 — 1895

Les années de formation

━━━━━━━━━━━━━━━━━━━━━━
```

---

# Citations

Les citations de presse sont mises en valeur.

Exemple.

> « On n'a pas oublié le succès... »

L'Éclair, 1899

---

# Notes

Les appels de notes deviennent interactifs.

Au clic :

* ouverture d'une petite fenêtre
* ou panneau flottant

Le lecteur ne quitte jamais le texte.

---

# Visionneuse

Toutes les images sont agrandissables.

Fonctionnalités :

* clic
* fermeture ESC
* clic hors image
* navigation clavier

Aucune bibliothèque externe.

---

# Responsive

Desktop :

mise en page éditoriale complète.

Tablette :

adaptation progressive.

Mobile :

lecture verticale optimisée.

Les textes restent prioritaires.

---

# Technologies

Aucun framework.

Uniquement :

* HTML5
* CSS moderne
* JavaScript natif

Pas de :

* Bootstrap
* Tailwind
* jQuery
* Fancybox
* Masonry

---

# Organisation du code

```
index.html

style.css

script.js
```

Le CSS sera structuré par sections.

```
Variables

Typography

Layout

Navigation

Hero

Sections

Figures

Gallery

Notes

Lightbox

Responsive
```

---

# Réutilisabilité

Le code ne doit pas être spécifique à William Thornley.

Il doit constituer un **socle éditorial** réutilisable pour d'autres catalogues raisonnés.

Les composants (hero, chapitre, figure, galerie, citation, notes...) doivent pouvoir accueillir un autre artiste sans modification structurelle.

---

# Contenu du POC

Le premier livrable ne reprendra pas immédiatement l'intégralité du brouillon.

Il comportera :

* le système graphique complet ;
* les interactions JavaScript ;
* les composants réutilisables ;
* les deux premières sections entièrement intégrées.

Cette première version servira de référence pour la mise en page des sections suivantes.

---

# Critères de réussite

Le POC sera considéré comme réussi si :

* la lecture est agréable sur écran ;
* le design s'efface derrière le contenu ;
* les œuvres sont valorisées sans excès ;
* le code est simple, propre et maintenable ;
* la structure peut être réutilisée pour d'autres artistes ;
* le rendu évoque davantage un **catalogue raisonné numérique** qu'un site web classique.


