import { GeneralError } from "../utils/error";
import { Request, Response, NextFunction } from "express";
export const handleError = (
  err: Error,
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  if (err instanceof GeneralError) {
    return resp.status(err.getErrorCode()).json({
      status: err.getErrorCode(),
      body: err.message,
    });
  }
  return resp.status(500).json({
    status: 500,
    body: err.message || "something went wrong",
  });
};
