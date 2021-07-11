import { Team } from "./team.interface";
import { Schema, model } from "mongoose";

const teamSchema = new Schema<Team>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    logo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const TeamModel = model<Team>("Team", teamSchema);
