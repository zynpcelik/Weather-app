import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", () => {
  const weatherData = ref({});

  const getWeatherData = async (city) => {
    const config = useRuntimeConfig();
    const { data } = await useFetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${config.public.apiKey}&q=${city}&days=3&aqi=no&alerts=no`
    );

    weatherData.value = data.value;
  };

  return { weatherData, getWeatherData };
});
