export interface Event {
  topic: string;
  name: string;
  payload: any;
  handled: boolean;
}
