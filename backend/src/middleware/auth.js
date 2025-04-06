const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");
const ApiError = require("../error/ApiError");
const privateRoutes = require("../service/privateRouteService");

/**
 * Permet de vérifier si l'utilisateur est connecté via la vérification du token JWT
 */
module.exports = (req, res, next) => {
  const model = req.params.model;
  const path = req.path.replace(/\//g, ""); // Supprimer les slashes
  const method = req.method.toUpperCase(); // Récupérer la méthode en majuscule

  // Vérification si la route appartient à privateRoutes
  const requiresAuth =
    (model &&
      privateRoutes[model] &&
      privateRoutes[model][method] !== undefined) ||
    (privateRoutes[path] && privateRoutes[path][method] !== undefined);

  if (requiresAuth) {
    const authRequired =
      (privateRoutes[model] && privateRoutes[model][method]) ||
      (privateRoutes[path] && privateRoutes[path][method]);

    // if (!authRequired) {
    //   return next();
    // }

    const token = req.cookies.auth_token;

    if (token) {
      try {
        // Destructuration du tokens
        const decoded = jwtDecode.jwtDecode(token);
        const verify = jwt.verify(token, decoded.userId.toString());
        console.log("Decoded token:", decoded);
        req.user = verify.userId;

        if (authRequired === true && decoded.role > 2) {
          throw new ApiError(403, "User not authorized to access this route");
        }

        if (authRequired === false && !decoded) {
          throw new ApiError(
            403,
            "User must be logged in to access this route"
          );
        }

        return next();
      } catch (error) {
        console.error("Token verification failed:", error);
        return next(new ApiError(401, "Invalid or expired token"));
      }
    } else {
      throw new ApiError(401, "Token not found");
    }
  } else {
    return next();
  }
};
