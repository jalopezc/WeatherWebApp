import React from 'react';
import "./WeatherInfo.css";
import WeatherTemp from './WeatherTemp/WeatherTemp';
import WeatherExtra from './WeatherExtra/WeatherExtra';
import {CLOUD,SUN,RAIN,SNOW,WINDY} from "./../../../Constants/Weathers";


const WeatherInfo = function({data}){
    const{temp, weatherState, humidity, wind}=data;
    return(
        <div>
           <WeatherTemp temp={temp} weatherState={weatherState}/>
           <WeatherExtra humidity={humidity} wind={wind}/>
        </div>
    );

}
export default WeatherInfo;