import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

import logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="Navbar">
      <div classname="leftSide">
        <img className="logo" src={logo} alt="Graphic Tease logo"/>
      </div>
      <div className="rightSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link className="option" to="/">HOME</Link>
          <Link className="option" to="">ABOUT</Link>
          <Link className="option" to="">SHOP</Link>
          <Link className="option" to="">CONTACT US</Link>
        </div>
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="hamburger"
          id="hamburger"
        >
          <GiHamburgerMenu size="3.5em" color="#000"></GiHamburgerMenu>
        </button>
      </div>
    </div>
  );
}

export default Nav;
 