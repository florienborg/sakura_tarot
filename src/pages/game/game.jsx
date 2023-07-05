import ShowImageReverse from '../../components/imgRev/imgRev';
import Button from '../../components/RedButton/RedButton';
import CardDetails from '../../components/cardDetails/cardDetails';
import './game.css';
import React, { useState, useEffect } from 'react';
import apiService from '../../services/apiService';

const getRandomCard = (deck)=> {
  const randomIndex = Math.floor(Math.random() * deck.length);
  return deck[randomIndex];
}

function Game() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [cardReverse, setCardReverse] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [deck, setDeck] = useState([]);
  const [showedCard, setShowedCard] = useState(null);

  useEffect(() => {
    apiService()
      .then(data => {
        //esta card no se usa para nada en particular sino para usar la imagen reversa unicamente
        const card = getRandomCard(data)
        setCardReverse(card.cardsReverse.clowReverse)
        setDeck(data)
      })
      .catch(error => {
        console.log("error:", error);
      });
  }, [setCardReverse]);

  const isFirstImageAnimated = buttonClickCount === 0;

  const handleButtonClick = () => {
    setSelectedCards(prevList => [...prevList, getRandomCard(deck)]);
    setButtonClickCount(prevCount => prevCount + 1);

    console.log('selectedCards', selectedCards)
  };

  const handleViewClick = (card, index)=>{

    if(index === 0){
      card.headline = 'Past';
    } 
    if(index === 1){
      card.headline = 'Present';
    }
    if(index === 2){
      card.headline = 'Future';
    }

    setShowedCard(card);
    setShowCard(true);
  }

  const handleReturnClick = ()=>{
    setShowedCard(null);
    setShowCard(false);
  }
  
  return (
    <div className='chooseContainer'>
      {showCard === false ?<div className='childContainer'>
        <ShowImageReverse imageUrl={cardReverse} isAnimated={isFirstImageAnimated} isSelected={false} />
      {buttonClickCount < 3 ? (
        <Button onClick={handleButtonClick} text='choose' type="choose"></Button>
      ) : null}
      <div className="staticCards">
        {selectedCards.map((item, index) => (
          <div key={index}>
            <ShowImageReverse imageUrl={cardReverse} isAnimated={false} isSelected={true} onClick={()=>handleViewClick(item, index)}/> 
          </div>
        ))}
      </div> 
      </div> : null
      }
     
      {showCard && <CardDetails headline={showedCard.headline} imageUrl={showedCard.clowCard} text={showedCard.meaning} onReturnClick={handleReturnClick}/>}
    </div>
  );
}

export default Game;
