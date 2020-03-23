import React from "react";
import Button from "../Button";

import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <div className="tbd">
      </div>
      <div className="inline">
          <Button isBig={true}>LEARN MORE</Button>
          <Button isBig={true}>CONTACT</Button>
      </div>
    </div>
  );
};

export default Home;
