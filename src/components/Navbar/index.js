import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                <FontAwesomeIcon
                icon={ faBookOpen }
                size="2x"
                />
                </li>
                <li className="logo">
                    anisha
                </li>
                <li>
                <FontAwesomeIcon
                icon={ faShoppingCart }
                size="2x"
                />
                </li>
            </ul>
        </div>
    )
}

export default Navbar;