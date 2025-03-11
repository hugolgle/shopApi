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

## Product

### **GET** **CREATE** `/:model`

- Recherche des données via le paramètre "model" dans l'URL
- Permet de récupérer des données

### **GET** **UPDATE** **DELETE** `/:model/:id`

- Recherche des données via le paramètre "model" et "id" dans l'URL
- Permet de récupérer, créer, mettre à jour ou supprimer des données
