import React from "react";

import "./styles.css";

const Button = ({ isFilled, isBig, onClick, isDisabled, isRed, children, isSmall }) => {
  const colorfillClass = isFilled ? "filled" : "";
  const sizeClass = isBig ? "big" : isSmall ? "small" : "";
  const disabledClass = isDisabled ? "disabled" : "";
  const redClass = isRed ? "red" : "";
  return (
    <button
      className={`button ${colorfillClass} ${sizeClass} ${disabledClass} ${redClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
