import React from "react";

import "../App.css";

import Hero from "./Hero";
import Directory from '../components/Directory/Directory';
import About from '../components/About/About';
import Quote from './Quote';
import Banner from '../components/Banner/Banner';
import Footer from './Footer';


function Home() {
  return (
    <>
      <Hero />
      <Directory />
      <About />
      <Quote />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
