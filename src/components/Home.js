import React from "react";

import "../App.css";

import Hero from "./Hero";
import Directory from './Directory';
import About from './About';
import Quote from './Quote';
import Banner from './Banner';


function Home() {
  return (
    <>
      <Hero />
      <Directory />
      <About />
      <Quote />
      <Banner />
    </>
  );
}

export default Home;
