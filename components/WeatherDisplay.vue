<template>
  <div class="flex space-x-6" v-if="weatherStore.weatherData.current">
    <CurrentCard :current="weatherStore.weatherData.current" />
    <div class="flex flex-col space-x-8 justify-between">
      <WeatherInput />
      <div class="flex space-x-6">
        <div v-for="day in weatherStore.weatherData.forecast.forecastday">
          <Card :data="day" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from "~~/stores/weather";

const weatherStore = useWeatherStore();
onMounted(() => {
  weatherStore.getWeatherData("istanbul");
});
</script>
