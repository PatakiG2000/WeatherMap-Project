import React from "react";
import classes from "./ForecastButtons.module.css";
import { NavLink } from "react-router-dom";

export default function ForecastButtons(props) {
  //updating the app jsx view state
  const [selected, setSelected] = React.useState("today");

  function handleClick(whichday) {
    props.handler(whichday);
    setSelected(whichday);
  }

  return (
    <div className={classes.container}>
      <div>
        <button
          onClick={() => handleClick("oneday")}
          className={selected === "oneday" ? classes.active : '"false"'}
        >
          <NavLink to="/homepage" activeClassName="current">Today</NavLink>
        </button>
        <button
          onClick={() => handleClick("tomorrow")}
          className={selected === "tomorrow" ? classes.active : "false"}
        >
          <NavLink to="/tomorrow">Tomorrow</NavLink>
        </button>

        <button
          onClick={() => handleClick("sevenday")}
          className={selected === "sevenday" ? classes.active : "false"}
        >
          <NavLink to="/week">Whole week</NavLink>
        </button>
      </div>
      <div>
        <h1 className={classes.forecastText} >Forecast </h1>
      </div>
    </div>
  );
}
