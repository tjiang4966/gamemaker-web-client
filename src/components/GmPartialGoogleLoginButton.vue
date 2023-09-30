<template>
  <v-btn 
    block
    @click="googleLogin"
  >
    Google Login
  </v-btn>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  methods: {
    googleLogin() {
      window.location.href = 'http://localhost:3000/auth/login/google';
    }
  }
})
</script>