// script to load data at the time of backend startup
const CSV_PATH = __dirname.replace("/build/scripts", "") + "/data/matches.csv";
const API_URL = `http://localhost:${process.env.PORT}`;

import csvParser from "csv-parser";
import fs from "fs";
import { Match } from "../matches/match.interface";

import axios from "axios";
import { MatchModel } from "../matches/match.model";
import { TeamModel } from "../teams/team.model";

const readCSVFile = (
  path: string
): Promise<
  { matches: Match[]; error: null } | { matches: null; error: Error }
> => {
  return new Promise((resolve, reject) => {
    try {
      const matches: Match[] = [];
      fs.createReadStream(path)
        .pipe(csvParser())
        .on("data", function (row: Match) {
          matches.push(row);
        })
        .on("end", function () {
          resolve({ matches, error: null });
        });
    } catch (err) {
      reject({ matches: null, error: err });
    }
  });
};

const loadMatches = async (matches: Match[]) => {
  for (const match of matches) {
    try {
      await axios.post(API_URL + "/matches", match);
    } catch (err) {
      console.log(
        `failed to load match: ${JSON.stringify(match)} in the database`
      );
    }
  }
};

const loadTeams = async (teams: { name: string }[]) => {
  for (const team of teams) {
    try {
      await axios.post(API_URL + "/teams", team);
    } catch (err) {
      console.log(
        `failed to load team: ${JSON.stringify(team)} in the database`
      );
    }
  }
};

const getTeams = (matches: Match[]): { name: string }[] => {
  const teams: string[] = [];
  matches.forEach((match) => {
    teams.push(match.team1);
    teams.push(match.team2);
  });
  const uniqueTeams = Array.from(new Set(teams));
  return uniqueTeams.map((t) => ({ name: t }));
};

// main
(async () => {
  await MatchModel.deleteMany({});
  await TeamModel.deleteMany({});

  const { matches, error } = await readCSVFile(CSV_PATH);
  if (error) {
    console.log("failed to load csv data");
  }
  if (matches) {
    console.log("\n✅ data csv loaded successfully!");
    const teams = getTeams(matches);
    await loadTeams(teams);
    console.log("\n✅ teams loaded successfully!");
    await loadMatches(matches);
    console.log("\n✅ matches loaded successfully!");
  }
})();
