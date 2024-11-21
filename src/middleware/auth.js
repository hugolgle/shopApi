const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;
  const user = req.headers.user;
  if (auth && user) {

    next();
  } else {
    throw new ApiError(401, "Token not found");
  }
};
