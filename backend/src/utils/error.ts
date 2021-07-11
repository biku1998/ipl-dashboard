export const getFormattedError = (errors: string[]) => {
  return {
    errors: {
      body: errors,
    },
  };
};

class GeneralError extends Error {
  constructor(message: string = "something went wrong!") {
    super();
    this.message = message;
  }
  getErrorCode(): number {
    if (this instanceof BadRequestError) return 400;
    if (this instanceof NotFoundError) return 404;
    return 500;
  }
}

class BadRequestError extends GeneralError {}
class NotFoundError extends GeneralError {}

export { GeneralError, BadRequestError, NotFoundError };
