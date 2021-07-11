import appEventEmitter from "../events/emitter";
import { BadRequestError } from "../utils/error";
import { Match } from "./match.interface";
import { MatchModel } from "./match.model";

export const create = async (payload: Match): Promise<Match> => {
  const match = new MatchModel(payload);
  await match.save();
  appEventEmitter.emit("match", {
    type: "matchCreated",
    payload: { match },
  });
  return match;
};

export const find = async (
  team: string = "",
  offset: number = 0,
  limit: number = 10
): Promise<Match[]> => {
  if (team === "") throw new BadRequestError("team query parameter is missing");
  const matches = await MatchModel.find({
    $or: [{ team1: team }, { team2: team }],
  })
    .sort({ date: -1 })
    .skip(offset)
    .limit(limit)
    .exec();
  return matches;
};
