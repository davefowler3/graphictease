import React from "react";
import "./About.scss";

import jillAbout from "../assets/images/jillabout.png";

function About() {
  return (
    <div className="about">
      <div className="about-info">
        <h1>Meet the Designer</h1>
        <p>Manhattan based fashion designer Jillian Hult formed <strong>Grahphic Tease Apparel</strong>as about
            way to make some of her ideas come to life.
            <br />
            Creating graphics that are based on the theory of "a play on words" has been a fun challenge in Jillian's eyes.
        </p>
        <img src={jillAbout} className="about-img" alt="Jill with hat"/>
      </div>
    </div>
  );
}
export default About;
