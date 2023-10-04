<template>
  <v-navigation-drawer
    v-model="showNav"
    class="gm-partial-navigation bg-green"
    color="bg-green"
  >
    <v-list>
      <GmRouterLink to="/profile" title="Profile" prepend-icon="mdi-view-dashboard"/>
      <GmRouterLink to="/games" title="Game Management" prepend-icon="mdi-view-dashboard"/>
      <GmRouterLink to="/about" title="About" prepend-icon="mdi-view-dashboard"/>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <GmPartialGoogleLoginButton />
      </div>
      <div class="pa-2">
        <v-btn block>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import GmPartialGoogleLoginButton from './GmPartialGoogleLoginButton.vue';
import GmRouterLink from './global/GmRouterLink.vue';

export default defineComponent({
  components: {
    GmRouterLink,
    GmPartialGoogleLoginButton,
  },
  data: () => ({
    showNav: true as boolean
  }),
  expose: [
    'showNav'
  ],
})
</script>
<style lang="scss">
.gm-nav-router-link {
  color: #000000;
  text-decoration-line: none;
}
</style>