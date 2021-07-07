import express, { Request, Response } from "express";
import { getFormattedError } from "../utils/error";
import * as TeamService from "./teams.service";
import * as MatchService from "../matches/matches.service";
export const teamsRouter = express.Router();

teamsRouter.get("/", async (req: Request, resp: Response) => {
  try {
    const fields: string | undefined = req.query.fields as string;
    const teams = await TeamService.findAll(fields ? fields.split(",") : null);
    resp.send({ teams });
  } catch (err) {
    resp
      .status(500)
      .send(
        getFormattedError([err.message, "failed to get all the teams detail"])
      );
  }
});

teamsRouter.get("/:teamName", async (req: Request, resp: Response) => {
  try {
    const teamName: string | undefined = req.params.teamName as string;
    const team = await TeamService.find(teamName);
    if (!team) {
      resp.status(404).send();
      return;
    }
    const matches = await MatchService.findTeamMatches(teamName, 0);
    resp.json({ team, matches });
  } catch (err) {
    resp
      .status(500)
      .send(
        getFormattedError([err.message, "failed to get all the teams detail"])
      );
  }
});

teamsRouter.post("/", async (req: Request, resp: Response) => {
  try {
    const team = await TeamService.create(req.body);
    resp.status(201).send({ team });
  } catch (err) {
    resp
      .status(500)
      .send(getFormattedError([err.message, "failed to create new team"]));
  }
});
