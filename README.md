# LA Pause — Site vitrine (Joigny, 89)

Site **statique multipage** (HTML/CSS/JS, sans build) — salon de coiffure homme & femme et barbier.
Optimisé SEO local (Joigny / Yonne 89) : `<head>` complet par page, Open Graph, JSON-LD `HairSalon`,
`sitemap.xml`, `robots.txt`, images en vrais fichiers, responsive + barre d'action mobile.

## Structure
```
index.html          Accueil
le-salon.html       Le salon
prestations.html    Prestations & tarifs
galerie.html        Galerie
contact.html        Contact / horaires / accès / avis
assets/style.css    styles partagés
assets/app.js       interactions (menu, lightbox, horaires du jour, copier tel)
assets/img/         images
favicon.svg  robots.txt  sitemap.xml  vercel.json
```

## Déploiement (GitHub → Vercel)
1. `git init && git add . && git commit -m "init LA Pause"`
2. Pousser sur un repo GitHub.
3. Importer le repo dans Vercel.
   - **Framework Preset : Other** (site statique, aucun build)
   - Build Command : *(vide)* · Output Directory : `.` (racine)
4. Vercel sert directement les fichiers. Auto-deploy à chaque push.

## À personnaliser avant mise en ligne (chercher/remplacer)
- **Téléphone** : `03 86 00 00 00` et le lien `tel:+33386000000` (barre mobile)
- **Adresse** : `12 rue Gabriel Cortel` (contact.html, footer, JSON-LD)
- **Domaine** : `https://www.lapause-joigny.fr` (balises canonical, OG, sitemap, robots)
- **Tarifs** : prestations.html + le JSON-LD de chaque page
- **Avis clients** : exemples à remplacer par de vrais avis
- **Réservation** : bouton « Réserver une place » (contact.html) → brancher Planity / Treatwell
- **og.jpg** : image de partage réseaux sociaux (1200×630) si besoin

## Notes SEO
- 1 `<h1>` par page, hiérarchie Hn propre, `alt` sur toutes les images.
- Pensez à déclarer le site dans **Google Search Console** et à créer/valider la fiche **Google Business Profile** (lien déjà pointé dans le footer).
