import React, { useState } from "react";
import { Link } from "react-router-dom";

import CartIcon from './Cart-icon/Cart-icon';
import "./Nav.scss";

import logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar">
      <div className="leftSide">
        <img className="logo" src={logo} alt="Graphic Tease logo"/>
      </div>
      <div className="rightSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link className="option" to="/">HOME</Link>
          <Link className="option" to="/about">ABOUT</Link>
          <Link className="option" to="/shop">SHOP</Link>
          <Link className="option" to="">ACCOUNT</Link>
          <Link className="option" to="">CONTACT</Link>
        </div>
        <div>
          <CartIcon />
        </div>
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="hamburger"
          id="hamburger"
        >
          <GiHamburgerMenu size="3.5em" color="#fff"></GiHamburgerMenu>
        </button>
      </div>
    </div>
  );
}

export default Nav;
 