<template>
  <div
    class="flex flex-col border-4 border-blue-400 bg-slate-900 shadow-lg shadow-slate-400 rounded-2xl p-4 w-52 text-white hover:scale-105 transition ease-in-out duration-500 fade-in-delay"
  >
    <h4 class="text-l self-end">{{ data.date }}</h4>
    <div class="text-center font-semibold">
      {{ data.day.maxtemp_c }} &#8451;/{{ data.day.mintemp_c }} &#8451;
    </div>
    <div class="flex justify-center">
      <img class="w-16" :src="'https:' + data.day.condition.icon" />
    </div>
    <h4 class="font-semibold text-center py-1">
      {{ data.day.condition.text }}
    </h4>
    <div class="flex text-sm justify-between text-center px-2">
      <div>
        <div class="font-medium">Humidity</div>
        <div>{{ data.day.avghumidity }}%</div>
      </div>
      <div>
        <div class="font-medium">Wind Speed</div>
        <div>{{ data.day.maxwind_kph }} km/s</div>
      </div>
    </div>

    <div class="flex text-sm justify-between text-center">
      <div>
        <div class="font-medium">Sunrise</div>
        <div>
          <span
            ><span class="text-lg">&#9788;</span> {{ data.astro.sunrise }}</span
          >
        </div>
      </div>
      <div>
        <div class="font-medium">Sunset</div>
        <div>
          <span
            ><span class="text-lg">&#9790;</span>{{ data.astro.sunset }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: { type: Object, required: true },
});
</script>
