import React from 'react';
import "./Footer.scss";

import logo from "../assets/images/logo.png";
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

import { Container, Col, Row } from "react-bootstrap";

function Footer() {
    return (
      <div className="footer">
        <Container className="py-5">
            <Row>
                <Col className="col-12 col-md">
                    <img className="logo" src={logo} width="60" height="60" alt="Graphic Tease logo"/>
                    <div className="social-icons">
                        <a href="/" target="blank" className="fab"><FaLinkedin /></a>
                        <a href="/" target="blank" className="fab"><FaInstagram /></a>
                        <a href="/" target="blank" className="fab"><FaTwitter /></a>
                    </div>
                    <small className="d-block mb-3 text-muted">Graphic Tease</small>
                </Col>
                <Col className="col-6 col-md">
                    <h5>Shop</h5>
                    <ul className="list-unstyled text-small"> 
                        <li><a className="link-secondary" href="/">Mens</a></li>
                        <li><a className="link-secondary" href="/">Womens</a></li>
                        <li><a className="link-secondary" href="/">Kids</a></li>
                        <li><a className="link-secondary" href="/">Classics</a></li>
                        <li><a className="link-secondary" href="/">Accessories</a></li>
                    </ul>
                </Col>
                <Col className="col-6 col-md">
                    <h5>Company</h5>
                    <ul className="list-unstyled text-small"> 
                        <li><a className="link-secondary" href="/">Terms of Use</a></li>
                        <li><a className="link-secondary" href="/">Privacy</a></li>
                        <li><a className="link-secondary" href="/">Affiliates</a></li>
                        <li><a className="link-secondary" href="/">Inclusion and Diversity</a></li>
                    </ul>
                </Col>
                <Col className="col-6 col-md">
                    <h5>Contact</h5>
                    <ul className="list-unstyled text-small"> 
                        <li><a className="link-secondary" href="/">Contact Us</a></li>
                        <li><a className="link-secondary" href="/">Order Status</a></li>
                    </ul>
                </Col>
                <Col className="contact col-6 col-md">
                    <h6>Address</h6>
                    <p>123 Main Street</p>
                    <p>New York, NY 10001</p>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  export default Footer;