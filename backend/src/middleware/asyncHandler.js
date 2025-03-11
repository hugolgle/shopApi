/**
 * Permet de gérer les erreurs asynchrones dans les routes
 */
function asyncHandler(handler) {
  return (req, res, next) => {
    handler(req, res, next).catch(next);
  };
}

module.exports = asyncHandler;
