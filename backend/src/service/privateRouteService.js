/**
 * Permet de lister toutes les routes privées afin de les protéger par une vérification d'authentification et de rôle
 *
 * Les routes définis ici nécessitent une authentification
 * Le boolean dans les méthodes indique si la route nécessite d'avoir un rôle spécifique
 */
const privateRoutes = {
  profile: {
    GET: false,
  },
  user: {
    GET: true,
    POST: false,
    PUT: false,
    DELETE: false,
  },
  product: {
    POST: true,
    PUT: true,
    DELETE: true,
  },
  order: {
    GET: true,
    POST: true,
    PUT: true,
    DELETE: true,
  },
  commands: {
    GET: false,
    POST: false,
    PUT: true,
    DELETE: true,
  },
  commandsState: {
    GET: true,
    POST: true,
    PUT: true,
    DELETE: true,
  },
  commandsDetails: {
    GET: false,
    POST: false,
    PUT: true,
    DELETE: true,
  },
  role: {
    GET: true,
    POST: true,
    PUT: true,
    DELETE: true,
  },
};

module.exports = privateRoutes;
