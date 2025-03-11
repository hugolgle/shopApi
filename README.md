# shopApi Tanguy Malnory / Hugo Le galle

# API E-Commerce

Une API RESTful pour gérer les produits, les commandes et les utilisateurs dans une plateforme de e-commerce.

## Installation

1. Clonez le dépôt : `git clone https://github.com/hugolgle/shopApi`
2. Installez les dépendances : `npm install`

# Endpoint

## Authentification

### **POST** `/login`

- Permet à un utilisateur de se connecter et de recevoir un token JWT pour accéder aux autres endpoints sécurisés.

## Gestion automatique des routes

Les routes qui ne demande pas de routing particulier sont gérer automatique en appelant le "model" (nom de la table).
Utilisation des "sous-dossiers" dans l'URL pour appeler une route spécifique.

### **GET** **POST** `/:model`

- Recherche des données via le paramètre "model" dans l'URL
- **GET** Renvoie toutes les lignes du model
- **POST$** Retourne un message de succès

### **GET** **PUT** **DELETE** `/:model/:id`

- Recherche des données via le paramètre "model" et "id" dans l'URL
- Permet de récupérer, créer, mettre à jour ou supprimer des données

## Sécurisation

- Middleware : Afin de vérifier si l'utilisateur est toujours connecter (un autre middleware est utiliser pour la gestion des erreurs).
- Rate Limiter : Limite le nombre de requête par IP par minute (défaut: 6 par minutes).
- Field Validation : Vérification des types de données envoyé pour correspondre au attendu et éviter les failles/injections
- Field Exclusion : Permet de gérer les informations renvoyées au client en excluant les champs sensible, non désiré ou inutile
