# Plan de mesure RAUNAQ

## Objectif principal
Mesurer la progression entre visite qualifiee et demande de commande, sans collecter de donnees personnelles dans l'analytique.

## Evenements disponibles
- `page_view`: page, langue et variante responsive.
- `language_change`: langue choisie.
- `begin_checkout`: ouverture du formulaire, quantite et valeur.
- `order_request_submit`: tentative d'envoi, quantite et valeur; a remplacer par un evenement de succes serveur lors de l'integration backend.
- `chat_toggle`: ouverture ou fermeture du chatbot.
- `social_click`: reseau et emplacement.

`analytics.js` alimente `window.dataLayer` et l'evenement navigateur `raunaq:analytics`. Aucun endpoint externe n'est configure actuellement.

## Taxonomie UTM
`utm_source`: instagram, tiktok, facebook, whatsapp, creator.
`utm_medium`: organic, paid_social, referral, message.
`utm_campaign`: objectif-marche-mois, par exemple `conversion-ma-2026-08`.
`utm_content`: angle-format-variante, par exemple `preuve-reel-a`.

## Tableau de bord hebdomadaire
Sessions, visiteurs par langue, taux d'ouverture du formulaire, taux de demande validee cote serveur, cout par demande qualifiee, taux de confirmation, taux de livraison et chiffre d'affaires net. Segmenter par source, campagne, langue et appareil.

## KPI et calculs
- Taux d'intention = `begin_checkout / page_view`.
- Taux de demande = commandes acceptees par le serveur / sessions.
- Taux de confirmation = commandes confirmees / demandes valides.
- CAC = depense attribuee / nouveaux clients livres.
- ROAS net = marge attribuee / depense publicitaire.

## Experimentation
Une hypothese et une variable par test. Definir avant lancement le KPI principal, la duree minimale, les exclusions et le seuil de decision. Ne pas conclure sur quelques clics. Conserver les variantes perdantes et leurs enseignements.

## Confidentialite
Exclure nom, telephone, adresse, texte libre et identifiant de commande des evenements marketing. Consentement avant tout outil non essentiel. Duree de conservation limitee, acces restreint et politique de suppression documentee.