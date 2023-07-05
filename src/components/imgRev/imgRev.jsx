// imgRev.jsx
import './imgRev.css';
import React, { useState, useEffect } from 'react';
import apiService from '../../services/apiService';

//este componente tiene que recibir la url de imagen
function ShowImageReverse({ isAnimated, isSelected }) {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    apiService()
      .then(data => {
        //poner esto en una funcion que recibe un maso y solo da una carta random, y luego definir esta funcion en game
        const randomIndex = Math.floor(Math.random() * data.length);
        const imgRev = data[randomIndex].cardsReverse.clowReverse;
        setImageURL(imgRev);
      })
      .catch(error => {
        console.log("error:", error);
      });
  }, [isAnimated]);

  return (
    <div className='revImg'>
      {imageURL && (
        <>
        <img
          src={imageURL}
          alt="Imagen"
          className={isAnimated ? 'animatedImage' : ''}
        />
        {/* {isSelected ? <Button text="view" type="view"></Button>: null} */}
        </>
      )}
    </div>
  );
}

export default ShowImageReverse;
