const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;

  if (auth) {
    const token = auth.split(" ")[1];

    // Destructuration du token
    const { user: { id } } = jwt.decode(token);
    const verify = jwt.verify(token, id.toString());
    req.user = verify;

    next();
  } else {
    throw new ApiError(401, "Token not found");
  }
};
