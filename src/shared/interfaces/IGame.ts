import type { IGameHasUser } from "./IGameHasUser";
import type { IUser } from "./IUser";

export interface IGame {
  id: number;
  name: string;
  createdDate: Date;
  gameStart: Date;
  gameEnd: Date;
  registerDueDate: Date;
  status: string;
  deleted: number;
  price: number;
  location: string;
  spots: number;
  createdUser: IUser;
  gameHasUser: IGameHasUser[];
}