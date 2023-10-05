import type { IGameHasUser } from "./IGameHasUser";
import type { IUser } from "./IUser";

export interface IGame {
  id: number;
  name: string;
  createdDate: Date;
  gameStart: Date;
  gameEnd: Date;
  regDueDate: Date;
  status: string;
  deleted: number;
  price: number;
  location: string;
  capacity: number;
  createdUser: IUser;
  gameHasUser: IGameHasUser[];
}