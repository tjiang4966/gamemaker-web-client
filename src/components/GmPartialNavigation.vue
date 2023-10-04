<template>
  <v-navigation-drawer
    v-model="showNav"
    class="gm-partial-navigation bg-green"
    color="bg-green"
  >
    <v-list>
      <GmRouterLink to="/profile" title="Profile" prepend-icon="mdi-view-dashboard"/>
      <GmRouterLink to="/games" title="Game Management" prepend-icon="mdi-soccer-field"/>
      <GmRouterLink to="/about" title="About" prepend-icon="mdi-information-outline"/>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import GmRouterLink from './global/GmRouterLink.vue';

export default defineComponent({
  components: {
    GmRouterLink,
  },
  data: () => ({
    showNav: true as boolean
  }),
  expose: [
    'showNav'
  ],
})
</script>