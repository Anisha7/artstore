import React from "react";
import Button from "../../../Button";

import "./styles.css";

const ArtItem = ({ image, price, title }) => {
  return (
    <div className="artItem">
      <img src={image} alt={title} />
      <p>{price}</p>
      <p>{title}</p>
      <div className="inline">
          <Button>LEARN MORE</Button>
          <Button isFilled={true}>ADD TO CART</Button>
      </div>
    </div>
  );
};

export default ArtItem;
