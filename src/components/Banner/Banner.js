import React from "react";

import "../Banner/Banner.scss";

import jillHat from "../../assets/images/jillwithhat.jpg";

import { Container } from "react-bootstrap";

function Cards () {
  
  return (
    <div className="banner">
      <Container fluid className="position-relative overflow-hidden p-3 m-md-3 text-center bg-light container-fluid">
              <div className="product-device shadow-sm d-md-block">
                <div className="img"><img src={jillHat} alt="Model holding out hat"/></div>
              </div>
              <div className="col-md-5 p-lg-5 mx-auto my-5">
                  <h1 className="display-4 fw-normal">Style AND Substance</h1>
                  <p className="lead fw-normal">
                    No matter your background, <strong>Graphic Tease</strong> understands
                    there are special things that make you unique. Now you can show it off.
                  </p>
                  <a className="btn" href="/">Our Mission</a>
              </div>
      </Container>
    </div>
  );
}

export default Cards;
