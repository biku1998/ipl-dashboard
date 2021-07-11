import { Router } from "express";
import * as RecordService from "./record.service";

export const recordRouter = Router();

recordRouter.get("/:teamName", async (req, resp, next) => {
  try {
    const { teamName } = req.params;
    const record = await RecordService.find(teamName);
    resp.json({ record });
  } catch (err) {
    next(err);
  }
});
