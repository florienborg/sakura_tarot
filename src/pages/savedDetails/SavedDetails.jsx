import React from "react";
import { useParams } from "react-router-dom";
import './SavedDetails.css';
import Header from "../../components/header/Header";

const SavedDetails = () => {
  const { id } = useParams();
  const savedDataHistory = JSON.parse(localStorage.getItem('savedDataHistory')) || [];
  const selectedData = savedDataHistory[id];

  if (!selectedData) {
    return <p>Reading Not Found</p>;
  }

  return (
    <div>
        <Header/>
        <div className="details-container">
      <h2 className="title-details">{selectedData.name}'s Reading</h2>
      <p>Birthdate: {selectedData.birthdate}</p>
      <p>Mood: {selectedData.mood}</p>

      {selectedData.selectedCards && selectedData.selectedCards.map((card, cardIndex) => (
        <div key={cardIndex} className="card">
          <img src={card.clowCard} alt={`Saved Card ${cardIndex}`} />
          <p>{card.headline}</p>
          <p>{card.meaning}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SavedDetails;