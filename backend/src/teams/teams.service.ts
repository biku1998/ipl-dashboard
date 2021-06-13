import { Team } from "./team.interface";
import { TeamModel } from "./team.model";

export const create = async (payload: Team): Promise<Team> => {
  const team = new TeamModel(payload);
  await team.save();
  return team;
};

export const findAll = async (): Promise<Team[]> => {
  const teams = await TeamModel.find();
  return teams;
};
