import React from 'react';
import '../RedButton/RedButton.css';

export default function RedButton(props) {
    return (
        <button className='redBtn' onClick={props.onClick}>
      {props.text}
    </button>
    )
}

RedButton.defaultProps = {
    default: 'SAVE',
}
