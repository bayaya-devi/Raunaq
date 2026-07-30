# Plan CRM et automatisation RAUNAQ

## Principe
Le site reste frontend-first. Toute commande doit devenir une demande cote serveur avant paiement, stock ou confirmation. Aucune donnee client ne doit etre stockee dans le navigateur, les logs marketing ou les URL.

## Contrat backend cible
`POST /api/orders` recoit: produit, quantite, langue, canal, consentement, nom, telephone et ville. Le serveur valide, limite le debit, normalise les champs, attribue une reference et renvoie un statut. Les secrets, tarifs de livraison, controles de stock et integrations restent exclusivement cote serveur.

## Etats CRM
`nouvelle` -> `a_verifier` -> `confirmee` -> `preparee` -> `expediee` -> `livree`.

Etats de sortie: `annulee`, `injoignable`, `remboursee`. Chaque changement conserve date, acteur et motif. Une confirmation humaine precede l'expedition.

## Scenarios
1. Nouvelle demande: accusé de reception transactionnel, notification interne et tache de verification.
2. Demande incomplete: une relance utile, puis cloture sans harcelement.
3. Commande confirmee: recapitulatif, prix total, livraison et canal de support.
4. Apres livraison: demande de retour d'experience honnete, sans recompense conditionnee a un avis positif.
5. Abandon: seulement si un consentement marketing explicite existe.

## Integrations futures
- CRM: table clients, commandes, consentements et historique.
- WhatsApp Business: modeles approuves et opt-in verifiable.
- Mailchimp: listes et tags synchronises cote serveur; cle API dans un secret d'environnement.
- Paiement: session creee par le backend, montant recalcule cote serveur et webhook signe.
- Stock: source unique cote serveur; jamais deduit du texte de la page.

## Garde-fous
Pas d'envoi en masse non sollicite, pas de publication automatique, pas de budget publicitaire sans validation. AdsPower et 1688 ne sont pas actives: elles ne deviennent pertinentes qu'avec un compte legitime, un besoin documente et une validation humaine. Conservation minimale, suppression sur demande, acces par role et journalisation des exports.