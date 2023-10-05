import qs from 'query-string';
import type { IFilterPayload } from "@/shared/interfaces/IFilterPayload";
import type { IGame } from "@/shared/interfaces/IGame";
import { apiRequest } from "@/shared/services/apiRequest";
import { defineStore } from "pinia";

const baseRequestUrl = '/games'
// const defaultFilterPayload: IFilterPayload = {
//   limit: 20,
//   page: 1,
//   offset: 0,
// }

export const gameStore = defineStore('game', {
  state: () => ({
    list: [] as IGame[],
    single: {} as IGame,
  }),
  actions: {
    async getGames(payload?: IFilterPayload) {
      const result = await apiRequest.get<IGame[]>(qs.stringifyUrl({
        url: `${baseRequestUrl}`,
        query: payload,
      }, {
        skipNull: true,
        skipEmptyString: true,
      }));
      if (result) {
        this.list = result.data;
      }
    },
    async createGame(payload: Partial<IGame>) {
        const result = await apiRequest.post<any, any, Partial<IGame>>('/games', payload);
        return result;
    },
  }
})
