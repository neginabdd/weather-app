import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    sunny: "clear-day",
    "clear-night": "clear-night",
    partlycloudy: "partly-cloudy-day",
    cloudy: "cloudy",
    fog: "foggy",
    hail: "hail",
    rainy: "rain",
    snowy: "snow",
    "snowy-rainy": "sleet",
    pouring: "heavy-rain",
    lightning: "thunderstorm",
    "lightning-rainy": "thunderstorm-rain",
    windy: "windy",
    "windy-variant": "windy-variant"
  };

  const shecodesIconMapping = {
    "01d": "sunny",
    "01n": "clear-night",
    "02d": "partlycloudy",
    "02n": "partlycloudy",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rainy",
    "09n": "rainy",
    "10d": "rainy",
    "10n": "rainy",
    "11d": "lightning",
    "11n": "lightning",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "fog",
    "50n": "fog"
  };

  const shecodesIcon = props.icon;
  const animatedIcon = codeMapping[shecodesIconMapping[shecodesIcon]];

  return <WeatherSvg state={animatedIcon} width={100} height={100} />;
}