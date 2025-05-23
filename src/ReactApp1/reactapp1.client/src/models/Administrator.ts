import { User } from "./User";

export class Administrator extends User {
  canManageEvents(): boolean {
    return true;
  }
}