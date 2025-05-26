import { IComment } from "./IComment";

export interface IEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  comments: IComment[];
}