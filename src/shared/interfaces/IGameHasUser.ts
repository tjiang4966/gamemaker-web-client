import type { IGame } from "./IGame";
import type { IUser } from "./IUser";

export interface IGameHasUser {
  id: number;
  game: IGame;
  user: IUser;
  inGameName: string;
  registerStatus: string;
  registerDate: Date;
}