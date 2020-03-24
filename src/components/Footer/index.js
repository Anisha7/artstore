import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faIdCard } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <ul>
        <li>
          <a href="https://www.instagram.com/almondbeans/">
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
          </a>
        </li>
        <li className="logo">
          <a href="https://www.linkedin.com/in/annysha/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://anishajain.herokuapp.com/">
            <FontAwesomeIcon icon={faIdCard} size="2x" />
          </a>
        </li>
        {/* TODO: replace to go to CONTACT page */}
        <li>
          <a href="mailto:anishaj037@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
          </a>
        </li>
      </ul>
      <p>@ 2020 Anisha Jain All Rights Reserved</p>
    </div>
  );
};

export default Footer;
