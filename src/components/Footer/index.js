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
          <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
        </li>
        <li className="logo">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faIdCard} size="2x" />
        </li>
      </ul>
      <p>@ 2020 Anisha Jain All Rights Reserved</p>
    </div>
  );
};

export default Footer;
