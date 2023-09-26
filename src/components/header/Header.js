import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import { Link } from "react-router-dom";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <Header className="header">
      <h3 className="logo">Bird Cage Shop</h3>

      <ul
        className={Mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <li>
          <Link to="/home">Home</Link>
        </li>
        {/* <li><Link to='/collection'>Collection</Link></li>
        <li><Link to='/shop'>Shop</Link></li> */}
        <li>
          <Link to="/dog">Doggg</Link>
        </li>
        <li>
          <Link to="/cat">Cat</Link>
        </li>
        <li>
          <Link to="/fish">Fish</Link>
        </li>
        {/* <li><Link to='/page'>Page</Link></li>   */}
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </Header>
  );
};

export default Header;
