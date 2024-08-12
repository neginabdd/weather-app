import React from "react";
import FormateDate from "./FormateDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function Weatherinfo(props){
    return(
    <div className="Weatherinfo">
    <h1 className="m-2 text-lg font-bold">{props.data.city}</h1>
    <ul className="list-disc pl-4">
      <li>
        <FormateDate date={props.data.data}/>
      </li>
      <li>{props.data.description}</li>
    </ul>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="flex items-center">
      <WeatherIcon code={props.data.icon}/>
      
      
      <WeatherTemp celsius={props.data.temperature} />
      </div>
      <div>
        <ul className="list-disc pl-4">
          <li>Humidity: {props.data.humidity}</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
      </div>
    </div>
    );
}