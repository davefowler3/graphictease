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
        <img className="logo" src={logo} />
      </div>
      <div className="rightSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/">HOME</Link>
          <a href="">ABOUT</a>
          <a href="">SHOP</a>
          <a href="">CONTACT US</a>
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
