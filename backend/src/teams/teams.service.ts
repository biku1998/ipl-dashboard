import { Team } from "./team.interface";
import { TeamModel } from "./team.model";

export const create = async (payload: Team): Promise<Team> => {
  const team = new TeamModel(payload);
  await team.save();
  return team;
};

export const findAll = async (fields: string[] | null): Promise<Team[]> => {
  let teams: Team[];
  if (fields) {
    let fieldsFilter: {
      [key: string]: number;
    } = { _id: 0 };
    fields.forEach((fName) => (fieldsFilter[fName] = 1));
    teams = await TeamModel.find({}).select(fieldsFilter);
  } else {
    teams = await TeamModel.find();
  }
  return teams;
};

export const find = async (teamName: string): Promise<Team | null> => {
  const teams = await TeamModel.find({ name: teamName });
  if (teams.length !== 0) {
    return teams[0];
  }
  return null;
};
