import React from "react";
import useGeoData from "../Store/geo-store";
import useWeatherData from "../Store/oneday-weather-store";
import useForecastData from "../Store/forecast-store";
import useBackgroundImage from "../Store/pexels-store";
import useMapData from "../Store/map-data-store";

import { createClient } from "pexels";
import pexelkey from "../utils/keys";

export default function DataGetter() {
  const location = useGeoData();
  const weatherDate = useWeatherData();
  const forecastData = useForecastData();
  const backgroundImage = useBackgroundImage();
  const client = createClient(pexelkey);
  const mapData = useMapData();

  React.useEffect(() => {
    const query = weatherDate.geoData.name;
    client.photos.search({ query, per_page: 1 }).then((photos) => {
      backgroundImage.changeUrl(photos.photos[0]?.src.landscape);
    });
  }, [weatherDate]);

  ///imageot majd methoddal változtatni!

  React.useEffect(() => {
    if (mapData.latLng.lat > 0) {
      weatherDate.fetchGeoData([mapData.latLng.lat, mapData.latLng.lng]);
      forecastData.fetchForecastData([mapData.latLng.lat, mapData.latLng.lng]);

      const query = weatherDate.geoData.name
        ? weatherDate.geoData.name
        : location.geoData[0]?.name;

      client.photos.search({ query, per_page: 1 }).then((photos) => {
        backgroundImage.changeUrl(photos.photos[0]?.src.landscape);
      });
    }

    const query = location.geoData[0]?.name
      ? location.geoData[0]?.name
      : weatherDate.geoData.name;

    weatherDate.fetchGeoData(location);
    forecastData.fetchForecastData(location);
    client.photos.search({ query, per_page: 1 }).then((photos) => {
      backgroundImage.changeUrl(photos.photos[0].src.landscape);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, mapData]);

  return <></>;
}
