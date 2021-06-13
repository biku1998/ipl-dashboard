import express, { Request, Response } from "express";
import cors from "cors";
import { teamsRouter } from "./teams/teams.router";
import { matchesRouter } from "./matches/matches.router";

// init db
require("./db/mongoose");

const app = express();
app.use(express.json());
app.use(cors());

// register routers
app.use("/teams", teamsRouter);
app.use("/matches", matchesRouter);

app.get("/", (req: Request, resp: Response) => {
  resp.send({
    info: "IPL Dashboard backend API",
    status: "active",
  });
});

export default app;
