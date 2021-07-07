import React from "react";
import "../components/Banner.scss";

import jillHat from "../assets/images/jillwithhat.jpg";

import { Container, Col, Row } from "react-bootstrap";

function Cards () {
  
  return (
    <div className="banner">
      <Container fluid>
        <Row>
          <Col className="card-item col-md-3">
              <div className="product-device shadow-sm d-md-block">
                <div className="img"><img src={jillHat} alt="Model holding out hat"/></div>
              </div>
              <div className="col-md-5 p-lg-5 mx-auto my-5">
                  <h1 className="display-4 fw-normal">Style AND Substance</h1>
                  <p>
                    No matter your backbround, <strong>Graphic Tease</strong> understands
                    there are special things that make you unique. Now you can show it off.
                  </p>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
