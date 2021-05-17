import React from 'react';
import "./WeatherInfo.css";
import WeatherTemp from './WeatherTemp/WeatherTemp';
import WeatherExtra from './WeatherExtra/WeatherExtra';


const WeatherInfo = function(){
    return(
        <div>
           <WeatherTemp/>
           <WeatherExtra humidity="40" wind="15"/>
        </div>
    );

}
export default WeatherInfo;