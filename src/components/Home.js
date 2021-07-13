import React from "react";

import "../App.scss";

import Hero from "../components/Hero/Hero";
import Directory from '../components/Directory/Directory';
import About from '../components/About/About';
import Quote from '../components/Quote/Quote';
import Banner from '../components/Banner/Banner';


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
