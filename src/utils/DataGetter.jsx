import React from "react";
import useGeoData from "../Store/geo-store";
import useWeatherData from "../Store/oneday-weather-store";
import useForecastData from "../Store/forecast-store";
import useBackgroundImage from "../Store/pexels-store";

import { createClient } from "pexels";
import pexelkey from "../utils/keys";

export default function DataGetter() {
  const location = useGeoData();
  const weatherDate = useWeatherData();
  const forecastData = useForecastData();
  const backgroundImage = useBackgroundImage();
  const client = createClient(pexelkey);

  ///imageot majd methoddal változtatni!

  React.useEffect(() => {
    const query = location.geoData[0]?.name;
    weatherDate.fetchGeoData(location);
    forecastData.fetchForecastData(location);
    client.photos.search({ query, per_page: 1 }).then((photos) => {
      backgroundImage.changeUrl(photos.photos[0].src.landscape);
      console.log(backgroundImage.imageUrl.imageUrl);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <></>;
}
