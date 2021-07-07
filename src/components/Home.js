import React from "react";

import "../App.css";

import Hero from "./Hero";
import Directory from './Directory';
import About from './About';

function Home() {
  return (
    <>
      <Hero />
      <Directory />
      <About />
    </>
  );
}

export default Home;
