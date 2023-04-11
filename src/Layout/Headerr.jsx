import React from "react";
import Searchbar from "../UI/Searchbar";
import CurrentPlace from "../UI/CurrentPlace";
import NightSwitch from "../UI/NightSwitch";

export default function Header(props) {
  //holding the header
  return (
    <div className="header">
      <CurrentPlace place={props.data} />
      <Searchbar submitHandler={props.submitHandler} error={props.error} />
      <NightSwitch />
    </div>
  );
}
