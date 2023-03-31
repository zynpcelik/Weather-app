<template>
  <div class="flex flex-col border-4 border-slate-500">
    <h4>{{ data.date }}</h4>
    <div class="flex">
      <div>
        {{ data.day.maxtemp_c }} &#8451;/{{ data.day.mintemp_c }} &#8451;
      </div>
    </div>
    <div>
      <img :src="'https:' + data.day.condition.icon" />
    </div>
    <h4 class="font-bold">{{ data.day.condition.text }}</h4>
    <div class="flex">
      <div>
        <div>Humidity</div>
        <div>{{ data.day.avghumidity }}%</div>
      </div>
      <div>
        <div>Wind Speed</div>
        <div>{{ data.day.maxwind_kph }} km/s</div>
      </div>
    </div>

    <div class="flex">
      <div>
        <div>Sunrise</div>
        <div>
          &#9788;
          <span>{{ data.astro.sunrise }}</span>
        </div>
      </div>
      <div>
        <div>Sunset</div>
        <div>
          &#9790;
          <span>{{ data.astro.sunset }}</span>
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
