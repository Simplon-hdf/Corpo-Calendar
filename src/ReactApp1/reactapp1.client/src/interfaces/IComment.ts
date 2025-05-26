import { IEvent } from "./IEvent";
import { IUser } from "./IUser";

export interface IComment {
  id: string;
  content: string;
  author: IUser;
  event: IEvent;
  date: string;
  createdAt: Date;
  replies: IComment[];
}