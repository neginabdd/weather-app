import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return(
  <div className="Weather">
    <h1>Tehran</h1>
    <ul>
      <li>
        Monday 7:00
      </li>
    <li>
      Mostly cloudly
    </li>
    </ul>
    <div className="row">
      <div className="grid-cols-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"/>
        34°C
      </div>

    </div>
  </div>
  );
  
}