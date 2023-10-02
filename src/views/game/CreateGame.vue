<template>
  <div class="w-100">
    <v-container>
      <v-form
        ref="form"
      >
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
        <small>*indicates required field</small>
        <div class="mt-4 d-flex">
          <v-btn
            class="mr-4"
            color="error"
          >
            Reset Form
          </v-btn>
          <v-btn
            color="success"
          >
            Create Game
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { IGame } from '@/shared/interfaces/IGame';

export default defineComponent({
  data: () => ({
    isLoading: false as boolean,
    showCreateModal: false as boolean,
    newGame: {} as IGame,
  }),
  computed: {
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
    }
  }
})
</script>
