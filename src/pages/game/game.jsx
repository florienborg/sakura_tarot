import ShowImageReverse from '../../components/imgRev/imgRev';
import Button from '../../components/RedButton/RedButton';
import CardDetails from '../../components/cardDetails/cardDetails';
import './game.css';
import React, { useState, useEffect } from 'react';
import apiService from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

//esta funcion se puede poner en otro archivo
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

  const getTitle = (index) => {
    if (index === 0) {
      return "Past";
    } else if (index === 1) {
      return "Present";
    } else if (index === 2) {
      return "Future";
    }
    return ""; 
  };

  const handleViewClick = (card, index)=>{
    //se puede hacer una funcion que se llame getTitle en otro archivo que reciba el indice de la carta y devuelva el titulo
    if(index === 0){
      card.headline = 'Past';
    } 
    if(index === 1){
      card.headline = 'Present';
    }
    if(index === 2){
      card.headline = 'Future';
    }

    card.isViewed = true;
    setShowedCard(card);
    setShowCard(true);
  }

  const handleReturnClick = ()=>{
    setShowedCard(null);
    setShowCard(false);
  }

  let buttonsShowed = false;
  if(selectedCards.length>0){
    //esto se puede poner en una funcion en otro archivo con o sin for
    buttonsShowed = selectedCards[0].isViewed && selectedCards[1].isViewed && selectedCards[2].isViewed
    console.log('buttonsShowed', buttonsShowed)
  }

  const navigate = useNavigate();
  const handleSaveButtonClick = () => {
    navigate('/saved', { state: { selectedCards }});
  }

  return (
    <div className='chooseContainer'>
      {showCard === false ?<div className='childContainer'>
        <div className='titleAndPic'>
          <h1 className='hiddenTitle'>First Image</h1>
          <ShowImageReverse imageUrl={cardReverse} isAnimated={isFirstImageAnimated} isSelected={false} />
        </div>
      {buttonClickCount < 3 ? (
        <Button onClick={handleButtonClick} text='CHOOSE' type="choose"></Button>
      ) : null}


      <div className="staticCards">
        {selectedCards.map((item, index) => (
          <div key={index}>
            <h1 className='time'>{getTitle(index)}</h1>
            <ShowImageReverse imageUrl={cardReverse} isAnimated={false} isSelected={true} onClick={()=>handleViewClick(item, index)}/> 
          </div>
        ))}
      </div> 
      </div> : null
      }
      {showCard && <CardDetails headline={showedCard.headline} imageUrl={showedCard.clowCard} text={showedCard.meaning} onReturnClick={handleReturnClick}/>}
      {buttonsShowed && <div className='buttons'><Button onClick={handleSaveButtonClick} text='SAVE'/> <Link to="/" ><Button text='RESTART'/></Link></div>}
    </div>
  );
}

export default Game;
