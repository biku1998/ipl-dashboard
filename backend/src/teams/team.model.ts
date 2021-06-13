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
    total_matches: {
      type: Number,
      required: true,
    },
    total_wins: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const TeamModel = model<Team>("Team", teamSchema);
