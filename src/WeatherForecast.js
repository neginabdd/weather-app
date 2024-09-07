import React,{useState} from "react";
import WeatherIcon from "./WeatherIcon";
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
          <div className="WeatherForcast-day">Tu</div>
          <div>
            <WeatherIcon code="clear-sky-day" width={55} height={55} />
          </div>
          <div className="flex items-center gap-2">
            <span className="Max-temp">19°</span>
            <span className="Min-temp opacity-60">10°</span>
          </div>
        </div>
      </div>
    );
  }
  else{
    const apiKey = "49505e5b19424fcteac5488o13e08d43";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }

 
}