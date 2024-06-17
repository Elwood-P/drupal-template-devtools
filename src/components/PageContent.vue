<template>

  <h1>
    <slot></slot>
  </h1>
  <button type="button" @click="increment">Clicks: {{ count }}</button>
</template>

<script setup>
  import { ref } from "vue";

  const count = ref(0);

  const increment = () => (count.value += 1);
</script>

<style>
h1 {
  margin: 5px;
}

button {
  margin-top: 10px;
}
</style>
