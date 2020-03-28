import React, {useState} from "react";
import Button from "../Button";
import { artStoreData } from "../../data";
import { connect } from 'react-redux'
import { remove } from '../../actions'

import "./styles.css";

const CartItem = ({ id, remove }) => {
  const [rerender, setRerender] = useState(false);
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
                remove(id)
                setRerender(!rerender)
                }}
          >
            REMOVE
          </Button>
        </div>
      </div>
    </div>
  );
};
const Cart = ({cart, remove}) => {
  const items = cart
  return (
    <div className="cart">
      <div>
        <h2>Your cart</h2>
        {items ? items.map(id => <CartItem id={id} key={id} remove={remove} />) : null}
      </div>
      <h2>Submit interest form</h2>
    </div>
  );
};

// takes state and maps it to redux
const mapStateToProps = (state) => {
    return {
        cart: state.cart
      }
}

// map increment, decrement action objects to our component (counter reducer) and connect it to the store 
const mapDispatchToProps = () => {
  return {
    remove,
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Cart);
