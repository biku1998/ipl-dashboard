import { Match } from "./match.interface";
import { Schema, model } from "mongoose";

const matchSchema = new Schema<Match>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    player_of_match: {
      type: String,
      required: true,
      trim: true,
    },
    venue: {
      type: String,
      required: true,
      trim: true,
    },
    team1: {
      type: String,
      required: true,
      trim: true,
    },
    team2: {
      type: String,
      required: true,
      trim: true,
    },
    toss_winner: {
      type: String,
      required: true,
      trim: true,
    },
    winner: {
      type: String,
      required: true,
      trim: true,
    },
    result: {
      type: String,
      required: true,
      enum: ["runs", "wickets"],
      trim: true,
    },
    result_margin: {
      type: Number,
      required: true,
    },
    umpire1: {
      type: String,
      required: true,
      trim: true,
    },
    umpire2: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const MatchModel = model<Match>("Match", matchSchema);
