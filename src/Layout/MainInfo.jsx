import React from "react";
import ForecastButtons from "../UI/ForecastButtons.jsx";
import ForecastCards from "../UI/ForecastCards.jsx";

import OneDay from "../UI/OneDay.jsx";
import Tomorrow from "../UI/Tomorrow.jsx";
import useForecastData from "../Store/forecast-store.js";
import { Route, Routes } from "react-router-dom";

export default function MainInfo(props) {
  const forecast = useForecastData();

  let forecastTimeArr = forecast.forecastData.daily?.time;

  if (!forecastTimeArr) {
    forecastTimeArr = [0, 0, 0, 0, 0, 0, 0];
  }

  const sevenDay = forecastTimeArr.map((item, i) => {
    return (
      <ForecastCards
        information={props.information}
        forecast={props.forecast}
        index={i}
      />
    );
  });

  return (
    <>
      <ForecastButtons handler={props.viewHandler} />
      <div className="information">
        <Routes>
          <Route path="/" element={<OneDay />} exact />
          <Route path="homepage" element={<OneDay />} />
          <Route path="tomorrow" element={<Tomorrow />} />
          <Route
            path="week"
            element={<div className="sevenday-view">{sevenDay}</div>}
          />
        </Routes>
      </div>
    </>
  );
}
