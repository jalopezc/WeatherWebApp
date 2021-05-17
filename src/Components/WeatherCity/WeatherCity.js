import React, { Component } from 'react';
import "./WeatherCity.css";
import Title from "./../Title/Title"
import WeatherInfo from "./WeatherInfo/WeatherInfo"
import {CLOUD,SUN,RAIN,SNOW,WINDY} from "./../../Constants/Weathers";

const data ={
    temp: 32,
    weatherState: WINDY,
    humidity:25,
    wind:"100km/h"
};
const data2 ={
    temp: 28,
    weatherState: RAIN,
    humidity:20,
    wind:"50km/h"
};
class WeatherCity extends Component{
    constructor(){
        super();
        this.state={
            city: "Cali",   
            data: data
        }
    };


    hadleUpdateClik = () =>{
        console.log("Actualizar");
        this.setState({
            data: data2
        });
    };
    render(){
        const{city,data}=this.state;
        return(
            <div className="uao_card">
                 <Title city={city}/>
                 <WeatherInfo data={data}/>
                <button onClick={this.hadleUpdateClik}>Actualizar</button>
             </div>
        );
    }
};

export default WeatherCity;