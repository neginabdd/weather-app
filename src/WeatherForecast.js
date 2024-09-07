import React,{useState} from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForcastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded,setLoaded]=useState(false);
  let[forecast,setForecaste]=useState(null);

  function handleResponse(response) {
    setForecaste(response.data.daily);
    setLoaded(true);
  }
  if(loaded){
    console.log(forecast);
    return (
      <div>
        <div className="grid grid-rows-[auto auto auto] gap-2 mb-5">
          <WeatherForcastDay data={forecast[0]}/>
        </div>
      </div>
    );
  }
  else{
    const apiKey = "49505e5b19424fcteac5488o13e08d43";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }

 
}