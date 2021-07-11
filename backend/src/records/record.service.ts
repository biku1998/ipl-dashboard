import { NotFoundError } from "../utils/error";
import { Record } from "./record.interface";
import { RecordModel } from "./record.model";

// for routers
export const find = async (teamName: string): Promise<Record | null> => {
  const record = await RecordModel.findOne({ teamName });
  if (!record) throw new NotFoundError("invalid team name");
  return record;
};

// for internal events

export const create = async (
  payload: Record
): Promise<{ record: Record | null; error: Error | null }> => {
  try {
    const record = new RecordModel(payload);
    await record.save();
    return { record, error: null };
  } catch (err) {
    return { error: err, record: null };
  }
};

export const findOne = async (
  teamName: string
): Promise<{ record: Record | null; error: Error | null }> => {
  try {
    const record = await RecordModel.findOne({ teamName });
    if (record) {
      return { error: null, record };
    }
    return { error: new Error("record not found"), record: null };
  } catch (err) {
    return { error: err, record: null };
  }
};

export const update = async (
  teamName: string,
  payload: Record
): Promise<{ record: Record | null; error: Error | null }> => {
  try {
    const record = await RecordModel.findOneAndUpdate({ teamName }, payload, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    if (record) {
      return { record, error: null };
    }
    return { record: null, error: new Error("record not found") };
  } catch (err) {
    return { record: null, error: err };
  }
};
