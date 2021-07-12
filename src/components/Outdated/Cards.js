import React from "react";
import "../components/Cards.scss";



import { Container, Col, Row } from "react-bootstrap";

function Cards () {
  
  return (
    <div className="cards">
      <Container fluid>
        <Row>
          <Col className="card-item col-md-3">
              <div className="background-image"/>
             
              <div className="content">
                  <h3 className="card-title">Apparel</h3>
                  <span className="subtitle">SHOP NOW</span>
              </div>
          </Col>
          <Col className="card-item-2 col-md-3">
            
            <div className="card-body">
              <h3 className="card-title">Hats</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="card-btn">
                <a href="apparel.html" class="btn">
                  SHOP NOW
                </a>
              </div>
            </div>
          </Col>
          <Col className="card-item-3 col-md-3">
            <div className="card-body">
              <h3 className="card-title">Masks</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="card-btn">
                <a href="apparel.html" class="btn">
                  SHOP NOW
                </a>
              </div>
            </div>
          </Col>
          <Col className="card-item-4 col-md-3">
            <div className="card-body">
              <h3 className="card-title">Accessories</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="card-btn">
                <a href="apparel.html" class="btn">
                  SHOP NOW
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
