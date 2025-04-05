const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");
const privateRoute = require("../service/privateRouteService");

/**
 * Permet de vérifier si l'utilisateur est connecté via la vérification du token JWT
 */
module.exports = (req, res, next) => {
  const model = req.params.model;
  const auth = req.headers.authorization;

  // Vérification si la route est privée et nécessite une authentification et être admin
  if (!privateRoute.includes(model)) {
    return next();
  }

  if (auth) {
    const token = auth.split(" ")[1];

    // Destructuration du token
    const {
      user: { id },
    } = jwt.decode(token);
    const verify = jwt.verify(token, id.toString());
    req.user = verify;

    // Vérification si l'utilisateur est admin
    if (verify.role !== "ADMIN") {
      throw new ApiError(403, "User not authorized");
    }

    next();
  } else {
    throw new ApiError(401, "Token not found");
  }
};
