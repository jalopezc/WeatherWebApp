import React from 'react';
import "./WeatherCity.css";
import Title from "./../Title/Title"
import WeatherInfo from "./WeatherInfo/WeatherInfo"
const WeatherCity = function(){
    return(
        <div className="uao_card">
            <Title city="Palmira"/>
            <WeatherInfo/>
        </div>
    )
}

export default WeatherCity;