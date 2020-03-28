import React from "react";
import { withRouter } from "react-router";
import Button from "../../../Button";
// import { addItem } from '../../../../helpers/storage';
import { connect } from 'react-redux'
import { add } from '../../../../actions/'

import "./styles.css";

const ArtItem = ({ image, price, title, id, sold, history }) => {
  // console.log(id)
  return (
    <div className="artItem">
      <img src={image} alt={title} />
      <p>{price}</p>
      <p>{title}</p>
      <div className="inline">
        <Button
          onClick={() =>
            history.push({
              pathname: `${"/item/" + title}`,
              state: { id: id }
            })
          }
        >
          LEARN MORE
        </Button>
        {sold ? (
          <Button isDisabled={true}>SOLD OUT</Button>
        ) : (
          <Button
            isFilled={true}
            onClick={() => this.props.add(id)}
          >
            ADD TO CART
          </Button>
        )}
        {/* <Button isFilled={true}>ADD TO CART</Button> */}
      </div>
    </div>
  );
};

// takes state and maps it to redux
const mapStateToProps = () => {
}

// map increment, decrement action objects to our component (counter reducer) and connect it to the store 
const mapDispatchToProps = () => {
  return {
    add,
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(withRouter(ArtItem));
