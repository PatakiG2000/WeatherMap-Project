import React from "react";
import classes from "./NightSwitch.module.css";

export default function NightSwitch() {
  return (
    <div className={classes.container}>
      <p>
        App by:{" "}
        <a
          href="https://github.com/PatakiGergo"
          target="_blank"
          className={classes.link}
          rel="noopener noreferrer"
        >
          {" "}
          Pataki Gergo
        </a>
      </p>
    </div>
  );
}
