import React from "react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Record from "../components/homecards";
const Home = () => {
  return (
    <section>
      <Hero />
      <Record />
      <Slider />
    </section>
  );
};

export default Home;
