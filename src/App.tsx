import React from "react";
import "./App.css";
import WeatherWidgetContainer from "./containers/WeatherWidgetContainer";

function App() {
  return (
    <div className="container">
      <h1>Wellcome to Weather App</h1>
      <WeatherWidgetContainer />
    </div>
  );
}

export default App;
