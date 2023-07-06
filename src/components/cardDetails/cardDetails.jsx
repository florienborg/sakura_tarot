
import React from 'react';
import Button from '../../components/Button/Button';
import './cardDetails.css';

function CardDetails({ headline, imageUrl, text, onReturnClick }) {

  return (
    <div className='cardDetailsContainer'>
        <h1 className='cardHeadline'>{headline}</h1>
        <img alt='frontCard' src={imageUrl}></img>
        <p className='meaning'>{text}</p>
      <Button text='RETURN' onClick={onReturnClick}/>
    </div>
  );
}

export default CardDetails;
