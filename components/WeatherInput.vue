<template>
  <div class="flex flex-col items-center">
    <form
      class="flex justify-center"
      @submit="handleSubmit"
      @input="(e) => (input = e.target.value)"
      @keyup="handleInput"
    >
      <input
        type="text"
        :value="input"
        placeholder="Search a city..."
        class="w-96 h-9 p-3 rounded-lg text-slate-900 font-semibold hover:bg-slate-900 hover:text-white"
      />
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
