<template>
  <div v-if="userStore.currentUser">
    {{ userStore.currentUser }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapStores } from 'pinia';
import { userStore } from '@/stores/user';

export default defineComponent({
  data: () => ({
    isLoading: false as boolean,
  }),
  computed: {
    ...mapStores(userStore),
  },
  mounted() {
    this.isLoading = true;
    Promise.all([
      this.init()
    ]).then(() => {
      this.isLoading = false;
    })
  },
  methods: {
    async init() {
      await this.userStore.getCurrentUser();
    }
  }
})
</script>