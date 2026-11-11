# 🇨🇬 BrazzaNav - Les bus de Brazzaville dans votre poche

**BrazzaNav** est une application web mobile (PWA - Progressive Web App) conçue pour aider les habitants et visiteurs de Brazzaville (Congo) à se déplacer facilement en bus urbains (**Coaster** et **Hiace**), connaître les tarifs (normaux et en période de pénurie de carburant), et s'orienter quand ils sont perdus.

---

## 🌟 Fonctionnalités principales

1. **Recherche d'itinéraire & correspondances** :
   - Calcule le trajet entre deux arrêts.
   - Gère les correspondances (ex: descendre à Mampassi pour prendre la ligne vers le Marché Total).
   - Alerte sur le mode "complétion" spécifique aux Hiace (annonces successives du contrôleur).
   - Calcule le coût total (tarif normal et tarif en cas de pénurie de carburant).
   - Propose l'alternative Zémidjan (moto-taxi).
2. **Carte interactive & GPS** :
   - Carte OpenStreetMap centrée sur Brazzaville.
   - Bouton **"📍 Ma position"** pour se repérer immédiatement via le GPS du smartphone.
   - Bouton **"🗺️ Google Maps"** pour lancer le guidage externe si souhaité.
3. **Liste des lignes avec filtres** :
   - Filtre par type : *Tous*, *Coaster* (longs trajets) ou *Hiace* (demi-terrain).
4. **Assistant IA & Local** :
   - Répond aux questions sur les transports à Brazzaville.
   - **Règle absolue : n'invente rien**, s'appuie strictement sur les données vérifiées.
5. **PWA & 100% Hors-ligne** :
   - S'installe sur smartphone Android ou iPhone comme une application native.
   - Fonctionne même sans connexion Internet ni réseau mobile.

---

## ✍️ Comment modifier ou ajouter des données (Sans coder !)

Toutes les informations sur les lignes, les arrêts et les prix sont centralisées dans :
📁 **`data/transport.json`**

Pour ajouter ou modifier un arrêt ou un prix :
1. Ouvrez `data/transport.json` avec un éditeur de texte (Bloc-notes, VS Code, etc.).
2. Modifiez le nom, le quartier ou le prix.
3. Si une information est encore inconnue, laissez simplement `"à confirmer"`.

---

## 🚀 Hébergement gratuit sur GitHub Pages

1. Créez un dépôt nommé `BrazzoNav` sur votre compte GitHub.
2. Déposez-y l'ensemble des fichiers de ce dossier.
3. Allez dans **Settings** > **Pages** > sous **Branch**, choisissez `main` (ou `master`) et cliquez sur **Save**.
4. Votre application sera instantanément disponible en ligne à l'adresse :
   `https://<votre-pseudo>.github.io/BrazzoNav/`

---

*Développé avec fierté pour Brazzaville 🇨🇬.*
