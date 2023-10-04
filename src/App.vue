<template>
  <v-layout>
    <GmPartialAppBar @nav-toggle="toggleNavigation"/>
    <GmPartialNavigation ref="navDrawer"/>
    <v-main class="d-flex">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router'
import GmPartialNavigation from '@/components/GmPartialNavigation.vue';
import GmPartialAppBar from './components/GmPartialAppBar.vue';
import { userStore } from './stores/user';
import { mapStores } from 'pinia';

export default defineComponent({
  components: {
    RouterView,
    GmPartialAppBar,
    GmPartialNavigation,
  },
  data: () => ({
    showNavigation: true as boolean,
  }),
  computed: {
    ...mapStores(userStore),
  },
  // mounted() {
  //   this.userStore.getCurrentUser();
  // },
  methods: {
    toggleNavigation() {
      console.log('toggle nav');
      (this.$refs.navDrawer as typeof GmPartialNavigation).showNav = !(this.$refs.navDrawer as typeof GmPartialNavigation).showNav;
    }
  },
});
</script>

<style lang="scss">
</style>
