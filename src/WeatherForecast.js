import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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