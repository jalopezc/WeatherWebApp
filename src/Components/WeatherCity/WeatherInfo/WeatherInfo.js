import React from 'react';
import "./WeatherInfo.css";
import WeatherTemp from './WeatherTemp/WeatherTemp';
import WeatherExtra from './WeatherExtra/WeatherExtra';
import {CLOUD,SUN,RAIN,SNOW,WINDY} from "./../../../Constants/Weathers";


const WeatherInfo = function(){
    return(
        <div>
           <WeatherTemp weatherState={SNOW} temp="31"/>
           <WeatherExtra humidity="40" wind="15"/>
        </div>
    );

}
export default WeatherInfo;