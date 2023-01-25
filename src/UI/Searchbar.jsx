import React from "react";
import classes from "./Searchbar.module.css";
import useGeoData from "../Store/geo-store";
import { useEffect } from "react";

export default function Searchbar(props) {
  //handling the search, on enter it passing the userInput to the App.jsx

  const [searchState, setSearchState] = React.useState("London");
  const userInput = React.useRef();

  const globalState = useGeoData();

  useEffect(() => {
    globalState.fetchGeoData(searchState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchState]);

 

  return (
    <form
      className={classes.bardiv}
      onSubmit={(e) => {
        e.preventDefault();
        setSearchState(userInput.current.value);
      }}
    >
      <img
        src={require("../assets/search-icon.png")}
        alt="Icon"
        className={classes["search-icon"]}
      />
      <input
        type="text"
        className={classes.search}
        placeholder="Start searching for a city..."
        ref={userInput}
      />
    </form>
  );
}
