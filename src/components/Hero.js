import React from "react";
import "./Hero.css";

import graffbw from "../assets/images/graffbw.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1>GRAPHIC TEASE APPAREL</h1>
        <p>Stay in the loop on trends and styles with urban appeal.</p>
        <img src={graffbw} className="hero-img" alt="Jill with spraypaint"/>
      </div>
    </div>
  );
}
export default Hero;
