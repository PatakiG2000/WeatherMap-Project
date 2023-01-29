import { create } from "zustand";



const useForecastData = create((set) => ({
  forecastData: {
    daily: {
      time: [0, 0, 0, 0, 0, 0],
      weathercode: [0, 0, 0, 0, 0, 0],
      temperature_2m_max: [0, 0, 0, 0, 0, 0, 0],
      temperature_2m_min: [0, 0, 0, 0, 0, 0, 0],
      windspeed_10m_max: [0, 0, 0, 0, 0, 0, 0],
    },
  },
  fetchForecastData: async (position) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${
        position[0] || position.geoData[0].lat
      }&longitude=${
        position[1] || position.geoData[0].lon
      }&&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max&timezone=auto`
    );
    set({ forecastData: await response.json() });
  },
  fetchDatabyMap: async (positionMap) => {
    const mapResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${positionMap.lat}&longitude=${positionMap.lng}&&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max&timezone=auto
      `
    );
    const response = await mapResponse.json();
    if (response.error) {
      const fetchingAgain = async (positionMap) => {
        const mapResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=51.5073219&longitude=-0.1276474&&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max&timezone=auto
          `
        );
        const response = await mapResponse.json();
        set({ forecastData: response });
      };
      fetchingAgain();
      alert("something went wrong");
    } else {
      set({ forecastData: response });
    }
  },
}));


export default useForecastData;
