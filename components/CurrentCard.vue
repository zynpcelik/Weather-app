<template>
  <div
    class="flex flex-col border-4 bg-slate-900 shadow-lg shadow-slate-400 border-blue-400 rounded-2xl w-64 h-80 py-3 px-3 text-white hover:scale-105 transition ease-in-out duration-500 fade-in"
    v-if="weatherStore.weatherData.location"
  >
    <h4 class="text-xl self-start">
      {{ weatherStore.weatherData.location.name }}
    </h4>
    <div class="flex justify-evenly py-3">
      <div class="text-4xl self-center font-bold">
        {{ current.temp_c }} &#8451;
      </div>
      <div>
        <img class="w-20 bounce" :src="'https:' + current.condition.icon" />
      </div>
    </div>
    <h4 class="text-2xl self-center">{{ current.condition.text }}</h4>
    <div class="flex flex-col text-center pt-3">
      <div class="font-bold">Feels like</div>
      <div>{{ current.feelslike_c }} &#8451;</div>
    </div>
    <div class="flex justify-between px-3 py-3 text-center">
      <div class="flex flex-col">
        <div>Humidity</div>
        <div>{{ current.humidity }}%</div>
      </div>
      <div class="flex flex-col">
        <div>Wind Speed</div>
        <div>{{ current.wind_kph }} km/s</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useWeatherStore } from "~~/stores/weather";

const props = defineProps({
  current: { type: Object, required: true },
});

const weatherStore = useWeatherStore();
</script>
