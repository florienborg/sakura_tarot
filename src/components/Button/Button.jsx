import React from 'react';
import '../Button/Button.css';

export default function Button({onClick, text}) {
    return (
        <button className='red-button' onClick={onClick}>
      {text}
    </button>
    )
}

Button.defaultProps = {
    text: 'SAVE',
}