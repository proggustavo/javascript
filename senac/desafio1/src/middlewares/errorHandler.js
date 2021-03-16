// import { AppError } from "../errors/appError.js";

let logError = false;
export const errorHandler = (err, req, res) => {
  if (err instanceof Error) {
    return res.status(err.statusCode).send(err.serialize());
  }

  if (process.env.NODE_ENV !== "test" || logError) {
    console.log(err);
  }

  res.status(500).send({ message: "Internal server error" });
};

/**
 * Serve para mostrar o log do erro
 *
 */
export const showErrors = (show) => {
  logError = show;
};
