import React from "react";
import ForecastButtons from "../UI/ForecastButtons.jsx";
import ForecastCards from "../UI/ForecastCards.jsx";
import classes from "./MainInfo.module.css";
import OneDay from "../UI/OneDay.jsx";
import Tomorrow from "../UI/Tomorrow.jsx";
import useForecastData from "../Store/forecast-store.js";

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
  })

  return (
    <div>
      <ForecastButtons handler={props.viewHandler} />
      <div className={classes.information}>
        {props.view === "oneday" && (
          <OneDay
            daily={"props.information"}
            forecast={"props.forecast"}
            background={"props.background"}
            attribution={"props.attribution"}
          />
        )}
        {props.view === "tomorrow" && (
          <Tomorrow
            forecast={"props.forecast"}
            infos={"props.information"}
            background={"props.background"}
          />
        )}
        {props.view === "sevenday" && sevenDay} 
      </div>
    </div>
  );
}
