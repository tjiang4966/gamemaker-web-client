<template>
  <div>
    <v-btn prepend-icon="mdi-plus" variant="tonal" @click="showCreateModal = true">
      Create New Game
    </v-btn>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Game Name*"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            prepend-inner-icon="mdi-cash"
            label="Registration Fee"
            v-model="newGame.price"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            prepend-inner-icon="mdi-account-group"
            label="Available Spots*"
            v-model="newGame.spots"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <label for="rdd-date-picker">Register Due Date</label>
          <VueDatePicker id="rdd-date-picker" v-model="newGame.registerDueDate"></VueDatePicker>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <label for="gs-date-picker">Game Start Time</label>
          <VueDatePicker id="gs-date-picker" v-model="newGame.gameStart"></VueDatePicker>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <label for="ge-date-picker">Game End Time</label>
          <VueDatePicker id="ge-date-picker" v-model="newGame.gameEnd"></VueDatePicker>
        </v-col>
        <v-col cols="12">
          <v-text-field
            prepend-inner-icon="mdi-map-marker"
            label="Location*"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <small>*indicates required field</small>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapStores } from 'pinia';
import { userStore } from '@/stores/user';
import type { IGame } from '@/shared/interfaces/IGame';

export default defineComponent({
  data: () => ({
    isLoading: false as boolean,
    showCreateModal: false as boolean,
    newGame: {} as IGame,
  }),
  computed: {
    ...mapStores(userStore),
  },
  mounted() {
    this.isLoading = true;
    Promise.all([
      this.init()
    ]).then(() => {
      this.isLoading = false;
    })
  },
  methods: {
    async init() {
      await this.userStore.getCurrentUser();
    }
  }
})
</script>