import React from "react";
import './SavedReadings.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";

const SavedReadings = () => {
  const { state } = useLocation();
  console.log(state);

  const savedDataHistory = JSON.parse(localStorage.getItem('savedDataHistory')) || [];

  return (
    <div className="savings-container">
      <Header />
      <div className="title-saved">
        Saved Readings
      </div>
  
      {savedDataHistory.map((savedData, historyIndex) => (
        <div key={historyIndex} className="saved-reading">
            <Link to={`/details/${historyIndex}`}>
            <img className="api-card" src="https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg" alt="Clow Card reverse" />
            </Link>
          <div className="info-reading">
            <p>{savedData.name}'s Reading</p>
          </div>
        </div>
      ))}
    </div>
  );
};  
  
    
export default SavedReadings;