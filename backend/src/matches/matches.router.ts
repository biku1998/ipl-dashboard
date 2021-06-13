import express, { Request, Response } from "express";
import * as MatchService from "./matches.service";
import { getFormattedError } from "../utils/error";

export const matchesRouter = express.Router();

matchesRouter.get("/", async (req: Request, resp: Response) => {
  try {
    const matches = await MatchService.findAll();
    resp.send({ matches });
  } catch (err) {
    resp
      .status(500)
      .send(
        getFormattedError([err.message, "failed to get all the matches detail"])
      );
  }
});

matchesRouter.post("/", async (req: Request, resp: Response) => {
  try {
    const match = await MatchService.create(req.body);
    resp.status(201).send({ match });
  } catch (err) {
    resp
      .status(500)
      .send(getFormattedError([err.message, "failed to create new match"]));
  }
});
