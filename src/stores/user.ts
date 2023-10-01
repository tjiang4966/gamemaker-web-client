import type { IUser } from "@/shared/interfaces/IUser";
import { apiRequest } from "@/shared/services/apiRequest";
import { defineStore } from "pinia";

const baseUrl = '/user'

export const userStore = defineStore('user', {
  state: () => ({
    currentUser: {} as IUser,
  }),
  actions: {
    async getCurrentUser() {
      const result = await apiRequest.get<IUser>(`${baseUrl}/self`);
      if (result) {
        this.currentUser = result.data;
      }
    }
  }
})
