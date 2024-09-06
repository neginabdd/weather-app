import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  const apiKey = "49505e5b19424fcteac5488o13e08d43";
  let lon= props.coordinate.lon;
  let lat=props.coordinate.lat;

  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

  function handleResponse(response) {
    console.log(response.data);
  }

  axios.get(apiUrl).then(handleResponse);
  console.log(props);

  return (
    <div>
      <div className="grid grid-rows-[auto auto auto] gap-2 mb-5">
        <div className="WeatherForcast-day">Tu</div>
        <div><WeatherIcon code="clear-sky-day" width={55} height={55}  /></div>
        <div className="flex items-center gap-2">
          <span className="Max-temp">19°</span>
          <span className="Min-temp opacity-60">10°</span>
        </div>
      </div>
    </div>
  );
}