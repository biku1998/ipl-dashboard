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

export const findTeamMatches = async (
  teamName: string,
  limit = 5
): Promise<Match[] | null> => {
  const matches = await MatchModel.find({
    $or: [{ team1: teamName }, { team2: teamName }],
  })
    .sort({ date: -1 })
    .limit(limit)
    .exec();
  return matches;
};
