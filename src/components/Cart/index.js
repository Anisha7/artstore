import React, { useState } from "react";
import Button from "../Button";
import { artStoreData } from "../../data";
import { removeItem, getItems } from '../../helpers/storage'

import "./styles.css";

const CartItem = ({ id, rerender }) => {
  const item = artStoreData.filter(item => item.id === id)[0];
  return (
    <div className="cartItem">
      <img src={item.img} alt={item.title} />
      <div className="details">
        <p className="price">{item.price}</p>
        <p className="title">{item.title}</p>
        <div>
          <Button
            onClick={() =>
              history.push({
                pathname: `${"/item/" + item.title}`,
                state: { id: id }
              })
            }
            isSmall={true}
          >
            LEARN MORE
          </Button>
          <Button
            isRed={true}
            isSmall={true}
            onClick={() => {
                removeItem(id)
                rerender()
                }}
          >
            REMOVE
          </Button>
        </div>
      </div>
    </div>
  );
};
const Cart = () => {
  let  [,setState]=useState();
  const items = getItems()
  return (
    <div className="cart">
      <div>
        <h2>Your cart</h2>
        {items ? items.map(id => <CartItem id={id} key={id} rerender={() => setState({})} />) : null}
      </div>
      <h2>Submit interest form</h2>
    </div>
  );
};

export default Cart;
