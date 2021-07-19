import express from "express";
import * as MatchService from "./matches.service";

export const matchesRouter = express.Router();

matchesRouter.get("/", async (req, resp, next) => {
  try {
    const team: string = req.query.team as string;
    const offset: number = parseInt(req.query.offset as string);
    const limit: number = parseInt(req.query.limit as string);
    const opponent: string = req.query.opponent as string;
    const years: string[] = req.query.years
      ? (req.query.years as string).split(",")
      : [];

    const matches = await MatchService.find(
      team,
      offset,
      limit,
      opponent,
      years
    );

    resp.send({ matches });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

matchesRouter.post("/", async (req, resp, next) => {
  try {
    const match = await MatchService.create(req.body);
    resp.status(201).send({ match });
  } catch (err) {
    next(err);
  }
});
