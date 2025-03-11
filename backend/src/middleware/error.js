/**
 * Renvoie une réponse JSON avec code et message d'erreur si nécessaire
 */
module.exports = (error, req, res, next) => {
  if (error) {
    const code = error.code ? error.code : 500;
    res.status(code).json({
      error: error.message,
    });
  }
};
