import { User } from "./User";

export class Collaborator extends User {
  canManageEvents(): boolean {
    return false;
  }
}
