import React from "react";
import ForecastButtons from "../UI/ForecastButtons.jsx";
import ForecastCards from "../UI/ForecastCards.jsx";
import classes from "./MainInfo.module.css";
import OneDay from "../UI/OneDay.jsx";
import Tomorrow from "../UI/Tomorrow.jsx";
import useForecastData from "../Store/forecast-store.js";
import {
  Route,
  Routes,
  Switch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

export default function MainInfo(props) {
  const forecast = useForecastData();

  const forecastTimeArr = forecast.forecastData.daily?.time

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
    <div>
      <ForecastButtons handler={props.viewHandler} />
      <div className={classes.information}>
        <Routes>
          <Route path="homepage" element={<OneDay />} />
          <Route path="tomorrow" element={<Tomorrow />} />
          <Route path="week" element={sevenDay} />
        </Routes>
      </div>
    </div>
  );
}
