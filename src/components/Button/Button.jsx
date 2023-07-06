import React from 'react';
import '../Button/Button.css';

export default function Button(props) {
    return (
        <button className='redBtn' onClick={props.onClick}>
      {props.text}
    </button>
    )
}

Button.defaultProps = {
    text: 'SAVE',

}
