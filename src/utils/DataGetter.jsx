import React from "react";
import useGeoData from "../Store/geo-store";
import useWeatherData from "../Store/oneday-weather-store";
import useForecastData from "../Store/forecast-store";

export default function DataGetter() {
  const location = useGeoData();
  const weatherDate = useWeatherData();
  const forecastData = useForecastData();



  React.useEffect(() => {
    weatherDate.fetchGeoData(location);
    forecastData.fetchForecastData(location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <></>;
}
