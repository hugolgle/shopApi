/**
 *  Service permettant d'exclure les données sensibles, non désirées lors du renvoyer des données
 *
 *  Recherche l'objet correspondant au modèle dans la base de données
 *  et retourne les données demandées
 */
module.exports = {
  user: {
    firstName: true,
    lastName: true,
    email: true,
    address: true,
    city: true,
    role: true,
    commands: true,
    createdAt: true,
  },
  product: {
    name: true,
    description: true,
    price: true,
    brand: true,
    imagePath: true,
    reference: true,
    categoryId: true,
    id: true,
  },
};
