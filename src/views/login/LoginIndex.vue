<template>
  <div class="gm-login-index">
    <v-card
      title="Login"
      width="250"
    >
    <template #text>
      <div class="d-flex flex-column p-10">
        <v-btn
          @click="googleLogin"
        >
          Google Login
        </v-btn>
      </div>
    </template>
    </v-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  methods: {
    googleLogin() {
      window.location.href = 'http://localhost:3000/auth/login/google?target=about';
    }
  }
})
</script>
<style lang="scss" scoped>
.gm-login-index {
  z-index: 9000;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: lightblue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.gm-login-card {
  width: 250px;
}
</style>