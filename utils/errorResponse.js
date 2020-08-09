class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message); // parent constructor
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
