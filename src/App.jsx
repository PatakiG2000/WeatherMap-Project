import React from "react";
import Header from "./Layout/Headerr";
import MainInfo from "./Layout/MainInfo";
import Global from "./Layout/Global";
import DataGetter from "./utils/DataGetter";

import "./App.css";

function App() {
  const [view, setView] = React.useState("oneday");

  //changing the state of the view
  function changeView(data) {
    setView(data);
  }

  return (
    <React.Fragment>
      <DataGetter />
      <div className="App">
        <Header />
        <MainInfo view={view} viewHandler={changeView} />
      </div>
      <Global  />
    </React.Fragment>
  );
}

export default App;
