import React from "react";
import { WeatherI } from "../containers/WeatherWidgetContainer";

interface WeatherWidgetI {
  weather?: WeatherI;
  backgroundColor?: string;
}

const WeatherWidget: React.FC<WeatherWidgetI> = ({
  weather,
  backgroundColor,
}): JSX.Element => {
  return weather ? (
    <div style={{ backgroundColor }} className="widget-container">
      <p>{`${weather.temperature} `}&#8451;</p>
      <p>{weather.description}</p>
      <img
        src={`http://openweathermap.org/img/w/${weather.iconId}.png`}
        alt="icon"
      />
      <p>{`${weather.wind} m/s`}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default WeatherWidget;
