<template>
  <v-app-bar
    density="compact"
    color="green"
    :elevation="0"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon v-if="!hideMenuBtn" @click="$emit('nav-toggle')">
      </v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Gamemaker</v-app-bar-title>

    <template #append>
      <v-avatar density="compact" color="surface-variant"></v-avatar>
        <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn 
            v-bind="props"
            icon="mdi-dots-vertical">
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <GmPartialGoogleLoginButton />
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            Logout
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import GmPartialGoogleLoginButton from './GmPartialGoogleLoginButton.vue';

export default defineComponent({
  components: {
    GmPartialGoogleLoginButton
  },
  computed: {
    hideMenuBtn() {
      return this.$vuetify.display.lgAndUp;
    }
  }
});
</script>