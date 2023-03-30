<template>
  <div class="flex flex-col" v-if="weatherStore.weatherData.location">
    <h4>{{ weatherStore.weatherData.location.name }}</h4>
    <div class="flex">
      <div>{{ current.temp_c }} &#8451;</div>
      <div>
        <img :src="'https:' + current.condition.icon" />
      </div>
    </div>
    <h4 class="font-bold">{{ current.condition.text }}</h4>
    <div>Feels like: {{ current.feelslike_c }} &#8451;</div>
    <div class="flex">
      <div>
        <div>Humidity</div>
        <div>{{ current.humidity }}%</div>
      </div>
      <div>
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
