<template>
  <div class="pa-2">
    <div v-if="gameStore.list" class="d-flex justify-start">
      <v-row>
        <v-col
          v-for="game of gameStore.list"
          :key="game.id"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card>
            <template #title>
              <div class="d-flex flex-column align-start">
                <div class="mr-2 text-h5 w-100 text-truncate">
                  {{ game.name }} xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </div>
                <GmStatusChip class="mt-2" :status="game.status" />
              </div>
            </template>
            <template #text>
              <div class="py-2">
                Registration Due: {{ dayjs(game.registerDueDate).format('DD/MM/YYYY HH:mm') }}
              </div>
              <div class="py-2">
                Game Start: {{ dayjs(game.gameStart).format('DD/MM/YYYY HH:mm') }}
              </div>
              <div class="py-2">
                Game End: {{ dayjs(game.gameEnd).format('DD/MM/YYYY HH:mm') }}
              </div>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapStores } from 'pinia';
import { gameStore } from '@/stores/game';
import GmStatusChip from '@/components/global/GmStatusChip.vue';
import dayjs from 'dayjs';

export default defineComponent({
  components: {
    GmStatusChip
  },
  data: () => ({
    isLoading: false as boolean,
    orderBy: 'status' as string,
    direction: 'asc' as 'asc' | 'desc',
    dayjs,
  }),
  computed: {
    ...mapStores(gameStore),
  },
  mounted() {
    this.isLoading = true;
    Promise.all([
      this.init()
    ]).then(() => {
      this.isLoading = false;
    });
  },
  methods: {
    async init() {
      await this.gameStore.getGames();
    }
  }
})
</script>