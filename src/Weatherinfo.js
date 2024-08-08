import React from "react";
import FormateDate from "./FormateDate";
export default function Weatherinfo(props){
    return(
    <div className="Weatherinfo">
    <h1 className="m-2 text-lg font-bold">{props.data.city}</h1>
    <ul className="list-disc pl-4">
      <li>
        <FormateDate date={props.data.data}/>
      </li>
      <li>Mostly cloudy</li>
    </ul>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="flex items-center">
        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          className="mr-2"
        />
        {Math.round(props.data.temperature)}°C
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