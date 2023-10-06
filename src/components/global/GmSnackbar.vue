<template>
  <v-snackbar
    :color="variant"
    :timeout="5000"
  >
    <template #default>
      <div>
        <div v-if="snackbarData.title">
          {{ snackbarData.title }}
        </div>
        <div v-if="snackbarData.message">
          {{ snackbarData.message }}
        </div>
      </div>
    </template>
  </v-snackbar>
</template>
<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

export type TSnackbarData = {
  message?: string,
  title?: string,
}

export default defineComponent({
  props: {
    snackbarData: {
      type: Object as PropType<TSnackbarData>,
      required: true,
    },
    variant: {
      type: String as PropType<'info' | 'error' | 'warning' | 'success'>,
      default: 'info',
    },
  },
})

</script>