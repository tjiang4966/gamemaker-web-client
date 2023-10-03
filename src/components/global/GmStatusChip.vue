<template>
  <v-chip
    v-if="statustext"
    :class="`${chipStatusClass}`"
  >
    {{ statustext }}
  </v-chip>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const STATUS_TEXT_MAP = [
  {
    value: 'registing',
    text: 'Registing',
    class: `bg-green`,
  },
  {
    value: 'pass-due',
    text: 'Pass Due',
    class: `bg-lime`,
  },
  {
    value: 'in-game',
    text: 'In Game',
    class: `bg-teal`,
  },
  {
    value: 'game-over',
    text: 'Game Over',
    class: `bg-blue-grey`,
  },
  {
    value: 'canceled',
    text: 'Canceled',
    class: `bg-red`,
  },
  {
    value: 'coming-soon',
    text: 'Coming Soon',
    class: `bg-grey`,
  },
];

export default defineComponent({
  props: {
    status: {
      type: String,
      required: true,
    },
  },
  computed: {
    chipStatusClass() {
      const mappedStatus = STATUS_TEXT_MAP.find((status) => status.value === this.status);
      return mappedStatus?.class;
    },
    statustext() {
      const mappedStatus = STATUS_TEXT_MAP.find((status) => status.value === this.status);
      return mappedStatus?.text;
    }
  }
});

</script>