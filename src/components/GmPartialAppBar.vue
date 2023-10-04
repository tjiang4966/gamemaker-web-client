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

  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    hideMenuBtn() {
      return this.$vuetify.display.lgAndUp;
    }
  }
});
</script>