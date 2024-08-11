import React,{useState} from "react";
export default function WeatherTemp(props){
    function showF(event){
       event.preventDefault();
       setUnit("fahrenheit");
    }
    function showC(event){
        event.preventDefault();
        setUnit("celsius");
    }
    const[unit,setUnit]=useState("celsius")
    if (unit=='celsius'){
        return(
            <div className="WeatherTemp">
        <span>
            <span className="temprature">
                {Math.round(props.celsius)}
            </span>
            <span className="unit"> °C |<a href="3" onClick={showF} >°F</a></span>
        </span>
        </div>
        );
    }
   else{
    let far=(props.celsius*9/5)+32;
    return(
        <div className="WeatherTemp">
    <span>
        <span className="temprature">
            {Math.round(far)}
        </span>
        <span className="unit"> °F |<a href="3" onClick={showC} >°C</a></span>
    </span>
    </div>
    );
}
}