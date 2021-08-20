// load the environment variable according to NODE_ENV

const DOT_ENV_PATH = process.env.NODE_ENV === "test" ? "/.env.test" : "/.env";

require("dotenv").config({
  path: __dirname.replace("/build", "") + DOT_ENV_PATH,
});

import express from "express";
import cors from "cors";
import { teamsRouter } from "./teams/teams.router";
import { matchesRouter } from "./matches/matches.router";
import { handleError } from "./middleware/handleError";
import { recordRouter } from "./records/record.router";
import appEventEmitter from "./events/emitter";
import { matchEventHandler } from "./events/listeners/topics/match";

// init db
require("./db/mongoose");

// load the data in the database
require("./scripts/load");

const app = express();
app.use(express.json());
app.use(cors());

// register routers
app.use("/teams", teamsRouter);
app.use("/matches", matchesRouter);
app.use("/records", recordRouter);

// register error handler middleware
app.use(handleError);

// attach event listeners
appEventEmitter.on("match", matchEventHandler);

app.get("/", (req, resp) => {
  resp.send({
    info: "IPL Dashboard backend API",
    status: "active",
  });
});

export default app;
