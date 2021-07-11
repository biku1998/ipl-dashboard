import { model, Schema } from "mongoose";
import { Record } from "./record.interface";

const recordSchema = new Schema<Record>(
  {
    teamName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    total: {
      type: Number,
      required: true,
    },
    wins: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const RecordModel = model<Record>("Record", recordSchema);
