import React from "react";
import ApiText from "../../components/apitext/apitext";
import './savedreadings.css';
import { useLocation } from "react-router-dom";
import db from "../../db.json"


const SavedReadings = () =>{
const { state } = useLocation();
console.log(state);
console.log(db);

    return (
        <div>
        {db.formdata.map(form => (
          <p> {form.mood} </p>
        ) )}
        
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
    </div>
)};

export default SavedReadings;