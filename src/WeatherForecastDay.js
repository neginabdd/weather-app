import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForcastDay(props){
    function day(){
        let date = new Date(props.data.time*1000);
        let day = date.getDay();
        let days =["Sun","Mon","Tue","Wen","Thu","Fri","Sat"]
        return days[day];
    }
    function maxTemp(){
        let temp=Math.round(props.data.temperature.maximum);
        return(`${temp}°`);
    }
    function minTemp(){
        let temp=Math.round(props.data.temperature.minimum);
        return(`${temp}°`);
    }
    return(
        <div>
    <div className="WeatherForcast-day">{day()}</div>
          <div>
          <WeatherIcon code={props.data.condition.icon} width={55} height={55} />
          </div>
          <div className="flex items-center gap-2">
            <span className="Max-temp">{maxTemp()}</span>
            <span className="Min-temp opacity-60">{minTemp()}</span>
          </div>
          </div>
    );
}