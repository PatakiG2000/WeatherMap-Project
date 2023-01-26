import { create } from "zustand";

/* const useWeatherData = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
})); */

const useForecastData = create((set) => ({
  forecastData: {
    daily: {
      time: [0, 0, 0, 0, 0, 0],
    },
  },
  fetchForecastData: async (position) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${position.geoData[0].lat}&longitude=${position.geoData[0].lon}&&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max&timezone=auto`
    );
    set({ forecastData: await response.json() });
  },
}));

/* const useForecastDataZustand = create((set) => ({
  weatherData: {},
  fetch: async (forecastURL) => {
    const response = await fetch(forecastURL);
    set({ weatherData: await response.json() });
  },
})); */

export default useForecastData;
