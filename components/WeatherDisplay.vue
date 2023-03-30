<template>
  <div>display</div>
  <CurrentCard :current="weatherStore.weatherData.current" />
</template>

<script setup>
import { useWeatherStore } from "~~/stores/weather";

const weatherStore = useWeatherStore();
onMounted(() => weatherStore.getWeatherData("london"));
</script>
