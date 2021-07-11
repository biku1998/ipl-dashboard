import { Team } from "./team.interface";
import { TeamModel } from "./team.model";

export const create = async (payload: Team): Promise<Team> => {
  const team = new TeamModel(payload);
  await team.save();
  return team;
};

export const findAll = async (
  fields: string[] = [],
  name: string = ""
): Promise<Team[]> => {
  const filter: { [key: string]: number } = { _id: 0 };

  fields.forEach((f) => (filter[f] = 1));

  const teams: Team[] = await TeamModel.find({
    name: new RegExp("^" + name),
  }).select(filter);

  return teams;
};
