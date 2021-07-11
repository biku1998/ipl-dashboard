import { Event } from "./event.interface";
import { EventModel } from "./event.model";

export const createEvent = async (
  payload: Event
): Promise<{ error: Error | null; event: Event | null }> => {
  try {
    const event = new EventModel(payload);
    await event.save();
    return { error: null, event };
  } catch (err) {
    return { error: err, event: null };
  }
};

export const updateEvent = async (
  eventId: any,
  payload: any
): Promise<{ error: Error | null; event: Event | null }> => {
  try {
    const event = await EventModel.findByIdAndUpdate(eventId, payload, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    if (!event) return { error: new Error("invalid eventId"), event: null };

    return { error: null, event };
  } catch (err) {
    return { error: err, event: null };
  }
};
