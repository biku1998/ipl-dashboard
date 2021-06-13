import express, { Request, Response } from "express";
import { getFormattedError } from "../utils/error";
import * as TeamService from "./teams.service";

export const teamsRouter = express.Router();

teamsRouter.get("/", async (req: Request, resp: Response) => {
  try {
    const teams = await TeamService.findAll();
    resp.send({ teams });
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
