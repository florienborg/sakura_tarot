import './imgRev.css';
import React, { useState, useEffect } from 'react';

function apiCall() {
    return fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
      .then(response => {
        if (!response.ok) {
          throw new Error("Error HTTP: " + response.status);
        }
        return response.json();
      })
      .catch(error => {
        console.log("error:", error);
      });
  }

  function ShowImageReverse() {
    const [imageURL, setImageURL] = useState('');
  
    useEffect(() => {
      apiCall()
        .then(data => {
          const imgRev = data[0].cardsReverse.clowReverse;
          setImageURL(imgRev);
        })
        .catch(error => {
          console.log("error:", error);
        });
    }, []);
  
    return (
      <div className='revImg'>
        {imageURL && <img src={imageURL} alt="Imagen" />}
      </div>
    );
  }
  
  export default ShowImageReverse;
  
