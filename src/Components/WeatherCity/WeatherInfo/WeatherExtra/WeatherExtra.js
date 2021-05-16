import React from 'react';
import "./WeatherExtra.css"

const WeatherExtra = function({humidity,wind}){
    return(
        <div>
        <h3>{`${wind}m/s`}</h3>
        <h3>{`${humidity}%`}</h3>
    </div>
    );
};
export default WeatherExtra;    