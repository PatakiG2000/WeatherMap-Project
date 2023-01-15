import React from "react";
import ForecastButtons from "../UI/ForecastButtons.jsx";
import ForecastCards from "../UI/ForecastCards.jsx";
import classes from "./MainInfo.module.css";
import OneDay from "../UI/OneDay.jsx";
import Tomorrow from "../UI/Tomorrow.jsx";

export default function MainInfo(props) {
  //passing data down from here to the "main" components
  const forecastArr = props.forecast.daily.weathercode
    ? props.forecast.daily.weathercode
    : [0, 0, 0, 0, 0, 0, 0];

  const sevenDay = forecastArr.map((item, i) => {
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
        {props.view === "today" && (
          <OneDay
            daily={props.information}
            forecast={props.forecast}
            background={props.background}
            attribution={props.attribution}
          />
        )}
        {props.view === "tomorrow" && (
          <Tomorrow
            forecast={props.forecast}
            infos={props.information}
            background={props.background}
          />
        )}

        {props.view === "sevenday" && sevenDay}
      </div>
    </div>
  );
}
