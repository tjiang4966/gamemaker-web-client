import type { IGame } from "./IGame";
import type { IGameHasUser } from "./IGameHasUser";

export interface IUser {
  id: number;
  displayName: string;
  games: IGame;
  googleId: string;
  provider: string;
  gameHasUser: IGameHasUser[];
}