import React from "react";
import { withRouter } from "react-router";

import Button from "../Button";
import ArtItem from "./components/ArtItem";
import "./styles.css";

import translation from "../../assets/art/translation.jpeg";
import navratri from "../../assets/art/Navratri.jpg";
import shackles from "../../assets/art/shackles.jpg";
import passion from "../../assets/art/Passion.jpg";
import loss from "../../assets/art/Loss.jpg";

const Home = ({ history }) => {
  const art = [
    {
      img: translation,
      price: "$300",
      title: "Translation"
    },
    {
      img: passion,
      price: "$300",
      title: "Passion"
    },
    {
      img: loss,
      price: "$500",
      title: "Loss"
    },
    {
      img: shackles,
      price: "$350",
      title: "Shackles"
    },
    {
      img: navratri,
      price: "$250",
      title: "Navratri"
    }
  ];

  return (
    <div className="home">
      <div className="tbd"></div>
      <div className="inline">
        <Button isBig={true}>LEARN MORE</Button>
        <Button isBig={true} onClick={() => history.push("/contact")}>
          CONTACT
        </Button>
      </div>
      <div className="art">
        {art.map(({ img, price, title }) => (
          <ArtItem
            key={title}
            image={img}
            price={price}
            title={title}
          ></ArtItem>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Home);
