import { create } from "zustand";

/* const useWeatherData = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
})); */

const useGeoData = create((set) => ({
  geoData: {
    name: "London",
    lat: 51.5073219,
    lon: -0.1276474,
  },
  fetchGeoData: async (searchterm) => {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchterm}&limit=5&appid=2653eef7dd1d751b628c8dc1bdbe14a3`
    );
    set({ geoData: await response.json() });
  },
}));

/* const useForecastDataZustand = create((set) => ({
  weatherData: {},
  fetch: async (forecastURL) => {
    const response = await fetch(forecastURL);
    set({ weatherData: await response.json() });
  },
})); */

export default useGeoData;
