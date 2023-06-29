import React from "react";
import './apitext.css';

const ApiText = ({ customClass }) => {
    return (
    <div className={`apitext-position ${customClass}`}>
    <div className={`apitext-box ${customClass}`}>
        <span className="api-text">Donec lacinia, tellus at aliquam pulvinar, ligula ligula dignissim lectus, molestie eleifend arcu enim vitae erat.</span>
    </div>
    </div>
    )
};

export default ApiText;
