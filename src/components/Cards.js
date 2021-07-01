import React from "react";
import Directory from './Directory';
import "../components/Cards.css";
import apparel from "../assets/apparel.png";
import hats from "../assets/hats.png";
import accessories from "../assets/accessories.png";
import card4 from "../assets/card4.png";

import { Container, Col, Row } from "react-bootstrap";

function Cards () {
  <div className="homepage">
    <Directory />
  </div>
  // return (
  //   <div className="cards">
  //     <Container fluid>
  //       <Row>
  //         <Col className="card-item-1 col-md-3">
  //           <img src={apparel} className="card-img" />
  //           <div className="card-body">
  //             <h3 className="card-title">Apparel</h3>
  //             <p className="card-text">
  //               Some quick example text to build on the card title and make up
  //               the bulk of the card's content.
  //             </p>
  //             <div class="card-btn">
  //               <a href="apparel.html" class="btn">
  //                 SHOP NOW
  //               </a>
  //             </div>
  //           </div>
  //         </Col>
  //         <Col className="card-item-2 col-md-3">
  //           <img src={hats} className="card-img" />
  //           <div className="card-body">
  //             <h3 className="card-title">Hats</h3>
  //             <p className="card-text">
  //               Some quick example text to build on the card title and make up
  //               the bulk of the card's content.
  //             </p>
  //             <div class="card-btn">
  //               <a href="apparel.html" class="btn">
  //                 SHOP NOW
  //               </a>
  //             </div>
  //           </div>
  //         </Col>
  //         <Col className="card-item-3 col-md-3">
  //           <img src={accessories} className="card-img" />
  //           <div className="card-body">
  //             <h3 className="card-title">Masks</h3>
  //             <p className="card-text">
  //               Some quick example text to build on the card title and make up
  //               the bulk of the card's content.
  //             </p>
  //             <div class="card-btn">
  //               <a href="apparel.html" class="btn">
  //                 SHOP NOW
  //               </a>
  //             </div>
  //           </div>
  //         </Col>
  //         <Col className="card-item-4 col-md-3">
  //           <img src={card4} className="card-img" />
  //           <div className="card-body">
  //             <h3 className="card-title">Accessories</h3>
  //             <p className="card-text">
  //               Some quick example text to build on the card title and make up
  //               the bulk of the card's content.
  //             </p>
  //             <div class="card-btn">
  //               <a href="apparel.html" class="btn">
  //                 SHOP NOW
  //               </a>
  //             </div>
  //           </div>
  //         </Col>
  //       </Row>
  //     </Container>
  //   </div>
  // );
}

export default Cards;
