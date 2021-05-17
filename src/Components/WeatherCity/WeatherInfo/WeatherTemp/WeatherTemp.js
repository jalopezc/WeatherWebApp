import React from 'react';
import WeatherInfo from '../WeatherInfo';
import "./WeatherTemp.css";
import WeatherIcons from "react-weathericons";
import {CLOUD,SUN,RAIN,SNOW,WINDY} from "./../../../../Constants/Weathers";
import PropTypes from 'prop-types';

const icons = {
    [CLOUD]:"cloud",
    [SUN]:"sun",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy"
}

const GetWeatherIcon = (weatherState) =>{
    var icon = icons[weatherState] ? icons[weatherState] : "fog";
    return(
        <WeatherIcons name={icon} size="2x"/>
    );
}

const WeatherTemp = function({temp,weatherState}){
    return(
        <div>
           {GetWeatherIcon(weatherState)}
            <h2>{`${temp} °C`}</h2>
        </div>
    );
};

WeatherTemp.prototype ={
    temp: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};
export default WeatherTemp;