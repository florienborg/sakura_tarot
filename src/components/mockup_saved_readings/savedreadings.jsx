import React from "react";
import ApiText from "../apitext/apitext";
import './savedreadings.css';


const SavedReadings = () =>{
    return (
    <div className="savings-container">
        <div className="title">
            Saved Readings
            </div>
        <div className="date"> 
            Date
        </div>
        <div className="api-card">
                <img className="api-card" src="https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg" alt="Clow Card reverse" />
        </div>
            <ApiText customClass='custom-apitext'/>
    </div>
    )
};

export default SavedReadings;