import { create } from "zustand";



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
    const response = await mapResponse.json();
    if (response.cod === "400") {
      const fetchingAgain = async (positionMap) => {
        const mapResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&appid=feb00505bb1f18c6a87d08f4d0e94fef
          `
        );
        const response = await mapResponse.json();
        set({ geoData: response });
      };
      fetchingAgain();
    } else {
      set({ geoData: response });
    }
  },
}));


export default useWeatherData;
