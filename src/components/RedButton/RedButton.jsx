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
    text: 'SAVE',

}

// export default function RedButton({ children, ...rest }) {
//     return (
//         <button className='redBtn' {...rest}>
//             {children}
//         </button>
//     )
// }