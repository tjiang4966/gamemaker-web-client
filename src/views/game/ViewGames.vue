<template>
  <div class="pa-2 w-100">
    <div class="mb-2 d-flex flex-row justify-space-between">
      <div>Filters</div>
      <div>
        <GmPartialModalCreateGame @created="init"/>
      </div>
    </div>
    <div v-if="gameStore.list" class="d-flex justify-start">
      <v-row>
        <v-col
          v-for="game of gameStore.list"
          :key="game.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <GmPartialGameCard :game="game" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapStores } from 'pinia';
import { gameStore } from '@/stores/game';
import GmPartialGameCard from '@/components/GmPartialGameCard.vue';
import GmPartialModalCreateGame from '@/components/GmPartialModalCreateGame.vue';
import dayjs from 'dayjs';

export default defineComponent({
  components: {
    GmPartialGameCard,
    GmPartialModalCreateGame,
  },
  data: () => ({
    isLoading: false as boolean,
    orderBy: 'status' as string,
    direction: 'asc' as 'asc' | 'desc',
    dayjs,
    showSnack: false,
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