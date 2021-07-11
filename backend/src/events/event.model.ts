import { Schema, model } from "mongoose";
import { Event } from "./event.interface";

const eventSchema = new Schema<Event>(
  {
    topic: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    payload: {
      type: Object,
    },
    handled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const EventModel = model<Event>("Event", eventSchema);
