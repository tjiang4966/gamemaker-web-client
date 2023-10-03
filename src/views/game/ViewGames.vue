<template>
  <div class="pa-2">
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
import dayjs from 'dayjs';

export default defineComponent({
  components: {
    GmPartialGameCard
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