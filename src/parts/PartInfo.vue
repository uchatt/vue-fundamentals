<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import parts from '@/data/parts';

export default {
  name: 'PartInfo',
  props: {
    partType: {
      type: String,
    },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      // Getting the params values from props setting props: true in routes.
      const { partType, id } = this;
      // const { partType, id } = this.$route.params;
      return parts[partType].find((part) => part.id === Number(id));
    },
  },
};
</script>

<style>
</style>
