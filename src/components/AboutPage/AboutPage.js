import React from "react";

import "./AboutPage.scss";

import profile from "../../assets/images/jillprofilehat.jpg";
import biggie from '../../assets/images/biggie.png';
import cartwheel from '../../assets/images/cartwheel.jpg';
import boss from '../../assets/images/boss.jpg';

function AboutPageComponent() {
  return (
    <div className="aboutPage">
      <div className="aboutPage-info">
        <h1>About the Designer</h1>
        <p>
            Creativity is my life force! With a positive attitude, I work effectively 
            and efficiently to problem solve, manage projects, and meet deadlines. I am a 
            creative and innovative designer. I hold vast experience in women’s sportswear 
            and activewear and there is no challenge I will back down from.
            <br />
            “The more you give your best, the better your best will get!”
        </p>
        <p>
            Creativity is my life force! With a positive attitude, I work effectively 
            and efficiently to problem solve, manage projects, and meet deadlines. I am a 
            creative and innovative designer. I hold vast experience in women’s sportswear 
            and activewear and there is no challenge I will back down from.
            <br />
            “The more you give your best, the better your best will get!”
        </p>
      </div>
        <div className="photos">
            <img src={profile} className="abt-img" alt="Jill pofile with red hat."/> 
            <img src={biggie} className="abt-img2" alt="Jill with spraypaint." />
            <img src={cartwheel} className="abt-img3" alt="Jill doing cartwheel" />
            <img src={boss} className="abt-img4" alt="Jill being a boss." />
        </div>
    </div>
  );
}
export default AboutPageComponent;
