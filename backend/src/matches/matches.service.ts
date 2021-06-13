import { Match } from "./match.interface";
import { MatchModel } from "./match.model";

export const create = async (payload: Match): Promise<Match> => {
  const match = new MatchModel(payload);
  await match.save();
  return match;
};

export const findAll = async (): Promise<Match[]> => {
  const matches = await MatchModel.find();
  return matches;
};
