<template>
  <div class="gm-form-field" :class="{ 'error': errorMessage }">
    <slot></slot>
    <small class="gm-form-field-error color-error">{{ errorMessage }}</small>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'GmFormField',
  props: {
    errorMessage: {
      type: String,
      default: '',
    }
  }
})
</script>
<style lang="scss">
.gm-form-field {
  &.error {
    color: rgb(var(--v-theme-error));
    input, svg {
      color: rgb(var(--v-theme-error));
      border-color: rgb(var(--v-theme-error));
    }
  }
}
.gm-form-field-error {
  font-size: 12px;
  padding: 6px 16px 0;
  color: rgb(var(--v-theme-error));
}
</style>