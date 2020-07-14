import React from "react";
import { WeatherI } from "../containers/WeatherWidgetContainer";

interface WeatherWidgetI {
  weather?: WeatherI;
  temperature: number;
}

const WeatherWidget: React.FC<WeatherWidgetI> = ({
  weather,
  temperature,
}): JSX.Element => {
  return weather ? (
    <>
      <p>{`${temperature} `}&#8451;</p>
      <p>{weather.description}</p>
      <img
        src={`http://openweathermap.org/img/w/${weather.iconId}.png`}
        alt="icon"
      />
      <p>{`${weather.wind} m/s`}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default WeatherWidget;
