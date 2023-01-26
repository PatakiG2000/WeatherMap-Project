import { create } from "zustand";

/* const useWeatherData = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
})); */

const useWeatherData = create((set) => ({
  geoData: {
    name: "London",
    main: {
      temp: "",
      feels_like: "",
      temp_min: "",
      temp_max: "",
    },
    timezone: 0,
    wind: {
      speed: "",
    },
    sys: {
      sunrise: "",
      sunset: "",
    },
  },
  fetchGeoData: async (position) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.geoData[0].lat}&lon=${position.geoData[0].lon}&appid=2653eef7dd1d751b628c8dc1bdbe14a3`
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

export default useWeatherData;
