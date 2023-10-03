<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-layout>
    <GmPartialNavigation />
    <v-main class="d-flex">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GmPartialNavigation from '@/components/GmPartialNavigation.vue';
import { userStore } from './stores/user';
import { mapStores } from 'pinia';

export default defineComponent({
  components: {
    GmPartialNavigation,
  },
  computed: {
    ...mapStores(userStore),
  },
  mounted() {
    this.userStore.getCurrentUser();
  }
});
</script>

<style lang="scss">
</style>
