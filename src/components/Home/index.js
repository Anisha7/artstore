import React from "react";
import Button from "../Button";
import ArtItem from "./components/ArtItem";
import "./styles.css";

import translation from "../../assets/art/translation.jpeg"
import navratri from "../../assets/art/Navratri.jpg"
import shackles from "../../assets/art/shackles.jpg"

const Home = () => {
  const art = [
    {
      img: translation,
      price: "$100",
      title: "Translation"
    },
    {
        img: navratri,
        price: "$250",
        title: "Navratri"
      },
      {
        img: shackles,
        price: "$350",
        title: "Shackles"
      },
  ];

  return (
    <div className="home">
      <div className="tbd"></div>
      <div className="inline">
        <Button isBig={true}>LEARN MORE</Button>
        <Button isBig={true}>CONTACT</Button>
      </div>
      <div className="art">
        {art.map(({ img, price, title }) => (
          <ArtItem key={title} image={img} price={price} title={title}></ArtItem>
        ))}
      </div>
    </div>
  );
};

export default Home;
