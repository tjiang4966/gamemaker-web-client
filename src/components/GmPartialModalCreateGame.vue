<template>
  <v-dialog
    v-model="showDialog"
    persistent
    :min-width="435"
    :max-width="900"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        color="green"
        v-bind="props"
        prepend-icon="mdi-plus"
      >
        Create Game
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Create Game</v-card-title>
      <v-card-text>
        <FormKit
          ref="gameFormRef"
          type="form"
          @submit="onFormSubmit"
          :actions="false"
        >
          <v-row>
            <v-col :cols="12" :sm="12" :md="6" :lg="4">
              <FormKit
                ref="gameForm"
                id="create-game-form"
                type="text"
                label="Game Name"
                name="name"
                validation="required"
              />
            </v-col>
            <v-col :cols="12" :sm="6" :md="3" :lg="4">
              <FormKit
                type="number"
                number
                prefixIcon="dollar"
                label="Registration Fee"
                name="price"
                validation="required | min: 0"
                :value="0"
                :min="0"
              />
            </v-col>
            <v-col :cols="12" :sm="6" :md="3" :lg="4">
              <FormKit
                type="number"
                number
                prefixIcon="people"
                label="Capacity"
                name="capacity"
                validation="required | min: 1 | integer"
                :validation-messages="{
                  integer: 'Must be an integer.'
                }"
                :value="18"
                :min="0"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col :cols="12" :sm="12" :md="6" :lg="4">
              <FormKit
                type="date"
                label="Game Date"
                name="gameDate"
                :value="dayjs().add(7, 'days').startOf('day').format('YYYY-MM-DD')"
              />
            </v-col>
            <v-col :cols="12" :sm="6" :md="3" :lg="4">
              <FormKit
                type="time"
                label="Start Time"
                name="startTime"
                value="18:00"
              />
            </v-col>
            <v-col :cols="12" :sm="6" :md="3" :lg="4">
              <FormKit
                type="time"
                label="End Time"
                name="endTime"
                value="20:00"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <FormKit
                type="datetime-local"
                label="Registration Stops On"
                name="regDue"
                :value="dayjs().add(5, 'days').startOf('day').set('hour', 22).format('YYYY-MM-DD HH:mm')"
               />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <FormKit
                type="text"
                label="Location*"
                name="location"
                validation="required"
              />
            </v-col>
          </v-row>
        </FormKit>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green"
          variant="flat"
          :disabled="disableSaveBtn"
          @click="onSaveBtnClick"
        >
          Create Game
        </v-btn>
        <v-btn
          color="red"
          variant="flat"
          @click="showDialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>
import type { IGame } from '@/shared/interfaces/IGame';
import dayjs from 'dayjs';
import localizaedFormat from 'dayjs/plugin/localizedFormat';
import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import { gameStore } from '@/stores/game';

dayjs.extend(localizaedFormat);

interface INewGameData {
  name: string,
  capacity: number,
  price: number,
  gameDate: string,
  startTime: string,
  endTime: string,
  regDueDate: string,
  location: string,
}

const showDialog = ref(false);
const gameForm: Ref = ref(null);
const gameFormRef: Ref = ref(null);
const gStore = gameStore();

const emit = defineEmits<{
  (e: 'created'): void
}>();

const disableSaveBtn = computed(() => {
  if(gameFormRef.value) {
    return !gameFormRef.value.node.context.state.valid;
  }
  return false;
});

/**
 * Methods
 */

async function init() {
}

function onSaveBtnClick() {
  const node = gameForm.value.node;
  node.submit();
};

async function onFormSubmit(data: INewGameData) {
  // return if data is invalid
  if (!gameFormRef.value.node.context.state.valid) {
    return;
  }
  // compose game object
  const newGame: Partial<IGame> = {
    name: data.name,
    price: data.price,
    capacity: data.capacity,
    gameStart: dayjs(`${data.gameDate} ${data.startTime}`).toDate(),
    gameEnd: dayjs(`${data.gameDate} ${data.endTime}`).toDate(),
    regDueDate: dayjs(data.regDueDate).toDate(),
    location: data.location,
  }
  const result = await gStore.createGame(newGame);
  if (result) {
    emit('created');
    showDialog.value = false;
  }
};

</script>