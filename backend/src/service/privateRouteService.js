/**
 * Permet de lister toutes les routes privées afin de les protéger par une vérification d'authentification et de rôle
 */
const privateRoutes = ["user", "order", "commands", "commandsState", "role"];

module.exports = privateRoutes;
