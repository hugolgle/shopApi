/**
 *  Service permettant d'exclure les données sensibles, non désirées lors du renvoyer des données
 *
 *  Recherche l'objet correspondant au modèle dans la base de données
 *  et retourne les données demandées
 */
module.exports = {
  user: {
    id: true,
    firstName: true,
    lastName: true,
    email: true,
    password: false,
    address: true,
    city: true,
    role: {
      select: {
        id: false,
        name: true,
      },
    },
    commands: true,
    createdAt: true,
  },
  product: {
    id: true,
    name: true,
    description: true,
    price: true,
    brand: true,
    imagePath: true,
    reference: true,
    categoryId: true,
  },
  commands: {
    id: true,
    userId: true,
    commandStateId: true,
    status: true,
    details: true,
  },
  category: {
    id: true,
    name: true,
    createdAt: false,
  },
};
