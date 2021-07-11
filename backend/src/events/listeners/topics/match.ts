import { Match } from "../../../matches/match.interface";
import * as EventService from "../../event.service";
import * as RecordService from "../../../records/record.service";
export const matchEventHandler = async ({
  type,
  payload,
}: {
  type: string;
  payload: any;
}) => {
  // log the event here
  const { error, event } = await EventService.createEvent({
    topic: "match",
    name: type,
    payload,
    handled: false,
  });
  if (error || !event) {
    console.log(`Failed to log ${type} event`);
    return;
  }
  switch (type) {
    case "matchCreated":
      matchCreatedEventHandler((event as any)._id, payload);
      break;
    default:
      console.log("unsupported event for match topic : ", type);
  }
};

const matchCreatedEventHandler = async (
  eventId: any,
  { match }: { match: Match }
) => {
  try {
    // update record of team1
    const { error, record } = await RecordService.findOne(match.team1);
    if (error) {
      if (error.message === "record not found") {
        // create new record
        const { record: newRecord, error: newRecordError } =
          await RecordService.create({
            teamName: match.team1,
            total: 1,
            wins: match.winner === match.team1 ? 1 : 0,
          });
        if (newRecordError) {
          console.log(`Failed to create new record for ${match.team1}`);
          return;
        }
      } else {
        console.log(`Failed to fetch record for team : ${match.team1}`);
      }
    } else {
      // record already exists
      if (record) {
        const { wins, total } = record;
        // update the wins and total based on the match instance created
        const { error: recordUpdateError } = await RecordService.update(
          match.team1,
          {
            teamName: record.teamName,
            total: total + 1,
            wins: match.winner === match.team1 ? wins + 1 : wins,
          }
        );
        if (recordUpdateError) {
          console.log(`Failed to update record of team : ${record.teamName}`);
        }
      }
    }
    // Repeat the same process for team2
    // update record of team2
    const { error: errorTeam2, record: recordTeam2 } =
      await RecordService.findOne(match.team2);
    if (errorTeam2) {
      if (errorTeam2.message === "record not found") {
        // create new record
        const { record: newRecord, error: newRecordError } =
          await RecordService.create({
            teamName: match.team2,
            total: 1,
            wins: match.winner === match.team2 ? 1 : 0,
          });
        if (newRecordError) {
          console.log(`Failed to create new record for ${match.team2}`);
          return;
        }
      } else {
        console.log(`Failed to fetch record for team : ${match.team2}`);
      }
    } else {
      // record already exists
      if (recordTeam2) {
        const { wins, total } = recordTeam2;
        // update the wins and total based on the match instance created
        const { error: recordUpdateError } = await RecordService.update(
          match.team2,
          {
            teamName: recordTeam2.teamName,
            total: total + 1,
            wins: match.winner === match.team2 ? wins + 1 : wins,
          }
        );
        if (recordUpdateError) {
          console.log(
            `Failed to update record of team : ${recordTeam2.teamName}`
          );
        }
      }
    }

    // update the event handled field
    const { event, error: eventUpdateError } = await EventService.updateEvent(
      eventId,
      { handled: true }
    );
    if (eventUpdateError) {
      console.log(`Failed to update handled status of event : ${eventId}`);
    }
  } catch (err) {
    console.log(`Error occurred in matchCreatedHandler `, err);
  }
};
