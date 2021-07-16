import React from "react";
import { Link } from 'react-router-dom';

import "./Hero.scss";

import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

import graffbw from "../../assets/images/graffbw.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1>GRAPHIC TEASE APPAREL</h1>
        <p>Stay in the loop on trends and styles with urban appeal.</p>
        <img src={graffbw} className="hero-img" alt="Jill with spraypaint"/>
      </div>
      <div className="socials">
      <Link className="option" to="/"><FaFacebook /></Link>
        <Link className="option" to="/"><FaInstagram /></Link>
        <Link className="option" to="/"><FaTwitter /></Link>
      </div>
    </div>
  );
}
export default Hero;
