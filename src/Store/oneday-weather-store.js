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
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        position[0] || position.geoData[0].lat
      }&lon=${
        position[1] || position.geoData[0].lon
      }&appid=feb00505bb1f18c6a87d08f4d0e94fef
      `
    );
    set({ geoData: await response.json() });
  },
  fetchDatabyMap: async (positionMap) => {
    const mapResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${positionMap.lat}&lon=${positionMap.lng}&appid=feb00505bb1f18c6a87d08f4d0e94fef
      `
    );
    set({ geoData: await mapResponse.json() });
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
