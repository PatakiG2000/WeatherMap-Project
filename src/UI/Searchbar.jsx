import React from "react";
import classes from "./Searchbar.module.css";

export default function Searchbar(props) {
  //handling the search, on enter it passing the userInput to the App.jsx
  const [searchState, setSearchState] = React.useState("");

  function onInput(event) {
    setSearchState(event.target.value);
  }

  return (
    <form
      className={classes.bardiv}
      onSubmit={(e) => {
        props.submitHandler(e, searchState);
        setSearchState("");
      }}
    >
      <img
        src={require("../assets/search-icon.png")}
        alt="Icon"
        className={classes["search-icon"]}
      />
      <input
        type="text"
        onChange={onInput}
        className={classes.search}
        placeholder="Start searching for a city..."
        value={searchState}
      />
    </form>
  );
}
