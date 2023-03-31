<template>
  <div class="flex flex-col items-center">
    <form
      class="flex justify-center"
      @submit="handleSubmit"
      @input="(e) => (input = e.target.value)"
    >
      <input type="text" :value="input" placeholder="Search a city..." />
    </form>
  </div>
</template>

<script setup>
import { useWeatherStore } from "~~/stores/weather";

const weatherStore = useWeatherStore();

const input = ref("");
const handleSubmit = (e) => {
  e.preventDefault();
  weatherStore.getWeatherData(input.value);
  input.value = "";
};
</script>
