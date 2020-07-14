import React, { useEffect, useState } from "react";
import axios from "axios";

import WeatherWidget from "../components/WeatherWidget";

interface LocationI {
  lat: number;
  lon: number;
}

export interface WeatherI {
  temperature: number;
  description: string;
  iconId: number;
  wind: number;
}

const WeatherWidgetContainer = (): JSX.Element => {
  const [location, setLocation] = useState<LocationI>();
  const [weather, setWeather] = useState<WeatherI>();
  const [backgroundColorNumber, setBackgroundColorNumber] = useState<number>(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  const backgroundColorResolver = (temperature: number): string => {
    if (temperature <= -10) {
      return "#00ffff";
    } else if (temperature > -10 && temperature < 30) {
      return "#fff700";
    } else {
      return "#ff8c00";
    }
  };

  useEffect(() => {
    if (!location || weather) {
      return;
    }
    try {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`
        )
        .then(({ data }) => {
          setWeather({
            temperature: data.main.temp,
            description: data.weather.description,
            iconId: data.weather[0].icon,
            wind: data.wind.speed,
          });
          setBackgroundColorNumber(data.main.temp);
        });
    } catch (err) {
      console.log("err", err);
    }
  }, [location, weather]);

  return (
    <>
      <WeatherWidget
        weather={weather}
        backgroundColor={backgroundColorResolver(backgroundColorNumber)}
      />
    </>
  );
};

export default WeatherWidgetContainer;
