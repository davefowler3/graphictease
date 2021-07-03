import React from "react";

import "../App.css";

import Hero from "./Hero";
import Cards from "./Cards";
import Directory from './Directory';

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Directory />
    </>
  );
}

export default Home;
