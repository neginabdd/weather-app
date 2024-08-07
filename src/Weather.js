import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormateDate from "./FormateDate"
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handle(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      data:new Date(response.data.time*1000),
      temperature: response.data.temperature,
      wind: response.data.speed, 
      city: response.data.name,
      humidity: response.data.humidity,
      description: response.data.description, 
      data: "Wendsday 7:00",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather border-2 rounded-md border-gray-300 p-4 m-3">
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="input">
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter a city..."
            />
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </form>

        <h1 className="m-2 text-lg font-bold">{weatherData.city}</h1>
        <ul className="list-disc pl-4">
          <li>
            <FormateDate date={weatherData.data}/>
          </li>
          <li>Mostly cloudy</li>
        </ul>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="mr-2"
            />
            {Math.round(weatherData.temperature)}°C
          </div>
          <div>
            <ul className="list-disc pl-4">
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "49505e5b19424fcteac5488o13e08d43";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handle);
    return "Loading...";
  }
}