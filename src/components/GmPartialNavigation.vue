<template>
  <v-navigation-drawer
    class="gm-partial-navigation"
    color="green-lighten-2"
  >
    <v-list>
      <v-list-item>
        <div class="text-h6">Gamemaker</div>
        <div class="text-subtitle-2">Go London Great Wall Go</div>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link prepend-icon="mdi-view-dashboard">
        <RouterLink to="/about" class="gm-nav-router-link">About</RouterLink>
      </v-list-item>
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

export default defineComponent({
  components: {
    GmPartialGoogleLoginButton,
  }
})
</script>
<style lang="scss">
.gm-nav-router-link {
  color: #000000;
  text-decoration-line: none;
}
</style>