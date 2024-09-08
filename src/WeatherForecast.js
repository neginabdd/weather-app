import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForcastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null); // fixed typo: setForecaste -> setForecast

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]); //array of vars

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load()
  {
    const apiKey = "49505e5b19424fcteac5488o13e08d43";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="grid grid-cols-6 gap-4 mb-5">
        {forecast.slice(0, 6).map((dailyForecast, index) => (
          <div key={index}>
            <WeatherForcastDay data={dailyForecast} />
          </div>
        ))}
      </div>
    );
  } else {
    load();
    return null;
  }
}