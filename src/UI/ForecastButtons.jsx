import React from "react";
import classes from "./ForecastButtons.module.css";

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
          onClick={() => handleClick("today")}
          className={selected === "today" ? classes.active : '""'}
        >
          Today
        </button>
        <button
          onClick={() => handleClick("tomorrow")}
          className={selected === "tomorrow" ? classes.active : 'false'}
        >
          Tomorrow
        </button>
        <button
          onClick={() => handleClick("sevenday")}
          className={selected === "sevenday" ? classes.active : 'false'}
        >
        Whole week
        </button>
      </div>
      <div>
        <h1>Forecast </h1>
      </div>
    </div>
  );
}
