import express from "express";

import * as TeamService from "./teams.service";
export const teamsRouter = express.Router();

teamsRouter.get("/", async (req, resp, next) => {
  try {
    const fields: string | undefined = req.query.fields as string;
    const name: string | undefined = req.query.name as string;
    const teams = await TeamService.findAll(
      fields ? fields.split(",") : [],
      name ? name : ""
    );
    resp.json({ teams });
  } catch (err) {
    next(err);
  }
});

teamsRouter.post("/", async (req, resp, next) => {
  try {
    const team = await TeamService.create(req.body);
    resp.status(201).send({ team });
  } catch (err) {
    next(err);
  }
});
