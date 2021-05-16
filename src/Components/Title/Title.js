import React from 'react';
import "./Title.css";

const Title = function({city}){
    
    return(   
     <h1 className="uao_title">{city}</h1>
    );
    
}

export default  Title;