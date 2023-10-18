import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import { Container } from '@mui/material'
import { useStore } from "../cart/store/hooks";
import SearchResults from "../search/searchResult/SearchResult";
import { Products_Cage } from "../../data/Cages";


const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [state, dispatch] = useStore();

  // handle search input
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    const url = `/search?query=${encodeURIComponent(trimmedQuery)}`;
    navigate(url);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      clearSearch();
    }
  };



  useEffect(() => {
    if (searchQuery) {
      const filteredResults = Products_Cage.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="navbar">
      <div>
        <Container
          style={showSearchInput ? { display: "flex" } : { display: "none" }}
          className="input-search-container"
          maxWidth={"md"}>

          <input
            className="input"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <SearchResults results={searchResults}
            input={searchQuery}
            clearSearch={clearSearch} />

          <button onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </button>
        </Container>

      </div>

      <header className="header">

        {/* <h3 className="logo">Bird Cage Shop</h3> */}
        <img src="//dt-pet-care.myshopify.com/cdn/shop/files/logo_300x300.png?v=1625137186" />
        <div className="info">
          <ul className={Mobile ? "nav-links-mobile" : "nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/customcage">Create your own cage</Link>
            </li>
          </ul>
        </div>
        <div className="right-icons">

          <a onClick={() => setShowSearchInput(!showSearchInput)}>
            <i className="fa fa-search"></i>
          </a>
          <Link to="/user">
            <i className="fa fa-user"></i>
          </Link>
          <Link to="/cart" className="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
            <span
              id="cartCount"
            >
              {
                state.reduce((acc, curr) =>
                  acc + curr.cartQuantity
                  , 0
                )
              }
            </span>
          </Link>

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
