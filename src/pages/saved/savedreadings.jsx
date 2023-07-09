import React from "react";
import './savedreadings.css';
import { useLocation } from "react-router-dom";
import db from "../../db.json";
import Header from "../../components/header/Header";


const SavedReadings = () =>{
const { state } = useLocation();
console.log(state);
console.log(db);

    return (
    <div className="savings-container">
        <Header />
        <div className="title">
            Saved Readings
            </div>
        <div className="reading">
            <div className="api-card">
                <img className="api-card" src="https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg" alt="Clow Card reverse" />
            </div>
            <div className="mood-data">
            {db.formdata.map(form => (
            <p> {form.mood} </p>
            ) )}
            </div>
       </div> 
    </div>
    
)};

export default SavedReadings;