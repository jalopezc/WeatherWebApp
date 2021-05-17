import React from 'react';
import WeatherInfo from '../WeatherInfo';
import "./WeatherTemp.css";
import WeatherIcons from "react-weathericons";

const GetWeatherIcon = () =>{
    return(
        <WeatherIcons name="snow" size="2x"/>
    );
}

const WeatherTemp = function(){
    return(
        <div>
           {GetWeatherIcon()}
            <h2>31°C</h2>
        </div>
    );

};
export default WeatherTemp;