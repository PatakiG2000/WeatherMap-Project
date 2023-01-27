import React from "react";
import classes from "./Searchbar.module.css";
import useGeoData from "../Store/geo-store";
import { useEffect } from "react";

export default function Searchbar(props) {
  //handling the search, on enter it passing the userInput to the App.jsx

  const [searchState, setSearchState] = React.useState("London");
  const [searchBar, setSearchBar] = React.useState("");
  const userInput = React.useRef();

  const globalState = useGeoData();

  function handleChange(e) {
    setSearchBar(e.target.value);
  }


  //error handling
  useEffect(() => {
    if (searchState) {
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchState}&limit=5&appid=2653eef7dd1d751b628c8dc1bdbe14a3`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.length < 1) {
            globalState.fetchGeoData("London");
            setSearchBar("");
            alert("Could not find anything on that location");
            return;
          }
        });
    }
    globalState.fetchGeoData(searchState);
    setSearchBar("");
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
        value={searchBar}
        onChange={handleChange}
      />
    </form>
  );
}
