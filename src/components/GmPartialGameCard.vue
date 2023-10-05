<template>
  <v-card class="d-flex flex-column">
    <v-card-title>
      <div class="d-flex flex-column align-start">
        <GmStatusChip class="mt-2" :status="game.status" />
        <div class="ma-2 text-h5 w-100 text-truncate">
          {{ game.name }} 周五野球
        </div>
      </div>
      <v-divider class="mb-2"></v-divider>
    </v-card-title>
    <v-card-text>
      <v-row class="text-body-1">
        <v-col class="d-flex flex-column" cols="12">
          <div class="d-flex flex-column">
            <div class="text-body-2 text-no-wrap text-truncate"><v-icon icon="mdi-map-marker" class="text-green"></v-icon>Location</div>
            <div class="pl-5">{{ game.location }}</div>
          </div>
        </v-col>
        <v-col class="d-flex flex-column" cols="12" lg="6">
          <div class="d-flex flex-column">
            <div class="text-body-2 text-no-wrap text-truncate"><v-icon icon="mdi-calendar" class="text-green"></v-icon>Game Date</div>
            <div class="pl-5">{{ dayjs(game.gameStart).format('MMM D, h:mma') }}</div>
          </div>
        </v-col>
        <v-col v-if="game.status === 'registing'" class="d-flex flex-column" cols="12" lg="6">
          <div class="d-flex flex-column">
            <div class="text-body-2 text-no-wrap text-truncate"><v-icon icon="mdi-calendar" class="text-green"></v-icon>Registration Due</div>
            <div class="pl-5">{{ dayjs(game.regDueDate).format('MMM D, h:mma') }}</div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <div class="w-100 d-flex flex-row justify-space-between">
        <v-btn variant="text" color="green" @click="showExpand = !showExpand">{{ showExpand ? 'Less Info' : 'More Info' }}</v-btn>
        <div>
          <v-btn variant="elevated" prepend-icon="mdi-account-plus">Join</v-btn>
        </div>
      </div>  
    </v-card-actions>
    <v-expand-transition>
      <div v-show="showExpand">
        <v-divider></v-divider>
        <v-card-text>
          <div class="d-flex flex-column text-body-1">
            <!-- More Game Data -->
            <v-row class="d-flex flex-row">
              <v-col class="d-flex flex-column" cols="6">
                <div class="text-body-2 text-no-wrap text-truncate"><v-icon icon="mdi-calendar" class="text-green"></v-icon>Game End</div>
                <div class="pl-5">{{ dayjs(game.gameEnd).format('MMM D, h:mma') }}</div>
              </v-col>
              <v-col class="d-flex flex-column" cols="6">
                <div class="text-body-2 text-no-wrap text-truncate"><v-icon icon="mdi-clock" class="text-green"></v-icon>Duration</div>
                <div class="pl-5">{{ gameDuration }}</div>
              </v-col>
              <v-col class="d-flex flex-column" cols="6">
                <div class="text-body-2 text-no-wrap text-truncate"><v-icon icon="mdi-cash" class="text-green"></v-icon>Registration Fee</div>
                <div class="pl-5">{{ `$${game.price}` }}</div>
              </v-col>
              <v-col class="d-flex flex-column" cols="6">
                <div class="text-body-2 text-no-wrap text-truncate"><v-icon icon="mdi-account-group" class="text-green"></v-icon>Capacity</div>
                <div class="pl-5">{{ game.capacity }}</div>
              </v-col>
            </v-row>
            <!-- Game Description -->
            <v-row></v-row>
          </div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import GmStatusChip from '@/components/global/GmStatusChip.vue';
import type { IGame } from '@/shared/interfaces/IGame';
import dayjs from 'dayjs';

export default defineComponent({
  components: {
    GmStatusChip,
  },
  props: {
    game: {
      type: Object as PropType<IGame>,
      required: true,
    }
  },
  data: () => ({
    dayjs,
    showExpand: false as boolean,
  }),
  computed: {
    gameDuration(): string {
      const diffHour = dayjs(this.game.gameEnd).diff(this.game.gameStart, 'h');
      const diffMinute = dayjs(this.game.gameEnd).diff(this.game.gameStart, 'm') - diffHour * 60;
      return `${diffHour ? diffHour + 'H' : ''} ${diffMinute ? diffMinute + 'M' : ''}`;
    }
  }
})

</script>