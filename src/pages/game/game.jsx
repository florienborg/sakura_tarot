import ShowImageReverse from '../../components/imgRev/imgRev';
import Button from '../../components/RedButton/RedButton';
import './Game.css';
import React, { useState } from 'react';

function Game() {
  // debe llamar a apiService (no debe ser llamada en imgRev)
  const [imageReverseList, setImageReverseList] = useState([]);
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const isFirstImageAnimated = buttonClickCount === 0;

  const handleButtonClick = () => {
    const newImageReverse = {
      isStatic: buttonClickCount >= 3
    };
    setImageReverseList(prevList => [...prevList, newImageReverse]);
    setButtonClickCount(prevCount => prevCount + 1);
  };

  return (
    <div className='chooseContainer'>
      <ShowImageReverse isAnimated={isFirstImageAnimated} isSelected={false} />
      {buttonClickCount < 3 ? (
        <Button onClick={handleButtonClick} text='choose' type="choose"></Button>
      ) : null}
      <div className="staticCards">
        {imageReverseList.map((item, index) => (
          <div key={index}>
            <ShowImageReverse isAnimated={false} isSelected={true} />
            {/* {!item.isStatic && (
              <div>
                {buttonClickCount >= 3 && <Button text="view"></Button>}
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
