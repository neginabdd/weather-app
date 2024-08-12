import React from "react";
import { WeatherSvg } from "weather-icons-animated";
export default function weatherIcon(props){
const codeMapping = {
  "sunny": "CLEAR_DAY",
  "clear-night": "CLEAR_NIGHT",
  "partlycloudy": "PARTLY_CLOUDY_DAY",
  "cloudy": "CLOUDY",
  "fog": "FOGGY",
  "hail": "HAIL",
  "rainy": "RAINY",
  "snowy": "SNOWY",
  "snowy-rainy": "SLEET",
  "pouring": "HEAVY_RAIN",
  "lightning": "THUNDERSTORM",
  "lightning-rainy": "THUNDERSTORM_RAIN",
  "windy": "WINDY",
  "windy-variant": "WINDY_VARIANT",
};

 
  return (
    <WeatherSvg state={codeMapping[props.code]} width={100} height={100} />
  );
}
