const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;

  if (auth) {
    const { user } = jwt.decode(auth);

    console.log(user);

    // Vérif token
    const token = auth.split(" ")[1];

    next();
  } else {
    throw new ApiError(401, "Token not found");
  }
};
