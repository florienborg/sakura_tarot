// imgRev.jsx
import './imgRev.css';
import React, { useState, useEffect } from 'react';

function ShowImageReverse({ isAnimated, imageUrl, card, onClick }) {

  return (
    <div className='revImg' onClick={onClick}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Imagen"
          className={isAnimated ? 'animatedImage' : ''}
        />
      )}
    </div>
  );
}

export default ShowImageReverse;
