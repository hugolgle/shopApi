/**
 *  Permet de gérer les erreurs de l'API
 */
class ApiError extends Error {
  code;
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

module.exports = ApiError;
