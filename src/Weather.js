import React from "react";
import axios from "axios";

export default function Weather() {
  function display(response) {
    alert(response.data.main.temp);
  }

  const apiKey = "1dbf926d3b4417bf379db7043bec1047";
  const units = "metric";
  const city = "Paris";
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(display);

  
}