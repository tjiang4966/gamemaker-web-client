<template>
  <v-list-item link @click="toTo" :prepend-icon="prependIcon">
    {{ title }}
  </v-list-item>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    prependIcon: {
      type: String,
    }
  },
  methods: {
    toTo() {
      location.href = this.to
    }
  }
})

</script>