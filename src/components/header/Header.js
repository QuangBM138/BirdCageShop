import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { RiLoginBoxFill } from "react-icons/ri";
import { TbSearch } from "react-icons/tb";

const Header = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <div className="navbar">
      <header className="header">
        {/* <h3 className="logo">Bird Cage Shop</h3> */}
        <img src="//dt-pet-care.myshopify.com/cdn/shop/files/logo_300x300.png?v=1625137186" />
        <div className="info">
          <ul className={Mobile ? "nav-links-mobile" : "nav-links"}>
            <li>
              <a href="/home">Home</a>
            </li>
          </ul>
        </div>
        <div className="right-icons">
          <input className="input" type="text" placeholder="Search" />
          <a>
            <i className="fa fa-search"></i>
          </a>
          <a>
            <i className="fa fa-user"></i>
          </a>
          <a>
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
        <div className="nav-bar">
          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? <ImCross /> : <FaBars />}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
