import { IUser } from '../interfaces/IUser';

export abstract class User implements IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(data: IUser) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.password = data.password;
  }

  abstract canManageEvents(): boolean;
}