
import React, { useState, useEffect } from 'react';
//cambiar nombre de componente RedButton por Button
import Button from '../../components/RedButton/RedButton';

function CardDetails({ headline, imageUrl, text, onReturnClick }) {

  return (
    <div className=''>
        <h1 className='cardHeadline'>{headline}</h1>
        <img alt='frontCard' src={imageUrl}></img>
        <p>{text}</p>
      <Button text='RETURN' onClick={onReturnClick}/>
    </div>
  );
}

export default CardDetails;
