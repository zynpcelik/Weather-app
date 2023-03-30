<template>
  <div>display</div>
  <h3>{{ weatherStore.weatherData }}</h3>
</template>

<script setup>
import { useWeatherStore } from "~~/stores/weather";

const weatherStore = useWeatherStore();
onMounted(() => {
  weatherStore.getWeatherData("istanbul");
});
</script>
