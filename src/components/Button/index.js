import React from 'react';

import "./styles.css";

const Button = ({ isFilled, isBig , children}) => {
    const colorfillClass = isFilled ? "filled" : ""
    const sizeClass = isBig ? "big" : ""
    return (
        <button className={`button + ${colorfillClass} + ${sizeClass}`}>
            { children }
        </button>
    )
}

export default Button;