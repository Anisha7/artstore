import React from "react";

import "./styles.css";

const Button = ({ isFilled, isBig, onClick, children }) => {
  const colorfillClass = isFilled ? "filled" : "";
  const sizeClass = isBig ? "big" : "";
  return (
    <button
      className={`button + ${colorfillClass} + ${sizeClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
