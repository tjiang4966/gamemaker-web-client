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
              v-model="newGame.name"
              :error-messages="v$.newGame.name.$errors[0]?.$message"
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
              :error-messages="v$.newGame.price.$errors[0]?.$message"
              :min="0"
              type="number"
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
              label="Capacity*"
              v-model="newGame.capacity"
              :error-messages="v$.newGame.capacity.$errors[0]?.$message"
              :min="0"
              type="number"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <GmFormField
              :error-message="v$.newGame.regDueDate.$errors[0]?.$message"
            >
              <label for="rdd-date-picker">Register Due Date*</label>
              <VueDatePicker id="rdd-date-picker" v-model="newGame.regDueDate" :min-date="new Date()"></VueDatePicker>
            </GmFormField>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <GmFormField
              :error-message="v$.newGame.gameStart.$errors[0]?.$message"
            >
              <label for="gs-date-picker">Game Start Time*</label>
              <VueDatePicker id="gs-date-picker" v-model="newGame.gameStart" :min-date="newGame.regDueDate ?? new Date()"></VueDatePicker>
            </GmFormField>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <GmFormField
              :error-message="v$.newGame.gameEnd.$errors[0]?.$message"
            >
              <label for="ge-date-picker">Game End Time*</label>
              <VueDatePicker id="ge-date-picker" v-model="newGame.gameEnd" :min-date="newGame.gameStart ?? newGame.regDueDate ?? new Date()"></VueDatePicker>
            </GmFormField>
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-inner-icon="mdi-map-marker"
              label="Location*"
              v-model="newGame.location"
              :error-messages="v$.newGame.location.$errors[0]?.$message"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
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
          @click="onCreate"
        >
          Create Game
        </v-btn>
      </div>
    </v-container>
    <div>
      {{ newGame }}
    </div>
    <div>
      {{ v$.newGame.name.$errors }}
    </div>
    <div>
      {{ typeof newGame.regDueDate }}
    </div>
    <div>
      {{ v$.newGame.regDueDate.$error }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { IGame } from '@/shared/interfaces/IGame';
import { useVuelidate } from '@vuelidate/core'
import { required, minValue, integer, helpers } from '@vuelidate/validators'
import GmFormField from '@/components/global/GmFormField.vue'
import dayjs from 'dayjs';
import { apiRequest } from '@/shared/services/apiRequest';

const mustBeFutureDate = helpers.withMessage(
  'Must be future date.',
  (value: Date) => dayjs(value).isAfter(dayjs()),
);

export default defineComponent({
  components: {
    GmFormField,
  },
  setup: () => ({
    v$: useVuelidate(),
  }),
  data: () => ({
    isLoading: false as boolean,
    showCreateModal: false as boolean,
    newGame: {} as IGame,
    rules: [],
  }),
  validations: () => ({
    newGame: {
      name: { $autoDirty: true, required },
      price: { $autoDirty: true, minValue: minValue(0) },
      capacity: { $autoDirty: true, minValue: minValue(0), required, integer },
      location: { $autoDirty: true, required },
      regDueDate: { $autoDirty: true, required, mustBeFutureDate },
      gameStart: { $autoDirty: true, required, mustBeFutureDate },
      gameEnd: { $autoDirty: true, required, mustBeFutureDate },
    }
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
    },
    async onCreate() {
      // validate
      const result = await this.v$.$validate();
      if (result) {
        // create
        const result = await apiRequest.post<any, any, IGame>('/games', {
          ...this.newGame,
          price: this.newGame.price ?? 0,
        });
        console.log(result);
      }
    }
  }
})
</script>
