import React from "react";
import classes from "./NightSwitch.module.css";

export default function NightSwitch() {
  return (
    <div className={classes.container}>
      <p>
        App by:{" "}
        <a href="https://github.com/PatakiGergo" target="_blank" className={classes.link}>
          {" "}
          Pataki Gergo
        </a>
      </p>
    </div>
  );
}
