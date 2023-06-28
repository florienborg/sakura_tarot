import ShowImageReverse from '../../components/imgRev/imgRev'
import Button from '../../components/buttonTmp/Buttontmp'
import './game.css'
import React, { useState } from 'react';

function Game() {
  const [imageReverseList, setImageReverseList] = useState([]);
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const isFirstImageAnimated = buttonClickCount === 0;

  const handleButtonClick = () => {
    const newImageReverse = {
      image: <ShowImageReverse isAnimated={false} />,
      isStatic: buttonClickCount >= 3
    };
    setImageReverseList(prevList => [...prevList, newImageReverse]);
    setButtonClickCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <ShowImageReverse isAnimated={isFirstImageAnimated} />
      {buttonClickCount < 3 ? (
        <Button onClick={handleButtonClick}>Choose card</Button>
      ) : null}
      <div className="staticCards">
        {imageReverseList.map((item, index) => (
          <div key={index}>{item.image}</div>
        ))}
      </div>
    </div>
  );
}




export default Game;