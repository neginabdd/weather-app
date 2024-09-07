import React, { useState } from "react";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city,setCity]=useState(props.defaultCity);

  function handle(response) {
    console.log(response.data);
    setWeatherData({
      coordinates: response.data.coordinates,
      ready: true,
      data:new Date(response.data.time*1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed, 
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description, 
      iconUrl: response.data.condition.icon
    });
  }
      function search(){
        let apiKey = "49505e5b19424fcteac5488o13e08d43";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
        axios.get(apiUrl).then(handle);
      }
      function handleSubmit(event){
        event.preventDefault();
        //search for a city
        search();
      }
      function handleCityChange(event){
      setCity(event.target.value);
      }
  if (weatherData.ready) {
    return (
      <div className="border-2 rounded-md border-gray-300 p-4">
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="input">
            </label>
            <input
              class="drop-shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              autoFocus="on"
              placeholder="Enter a city..."
              onChange={handleCityChange}
            />
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
        <Weatherinfo data={weatherData}/>
        <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
    );
  } else {
    search();
    return "Loading...";
  }
}