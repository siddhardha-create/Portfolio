import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/Heroimage";
import About from "../components/Aboutcontent";
import Footer from "../components/Footer";
import Bot from "../components/Bot";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <About text="Learn More.." link="/About" />
      <Bot />
      <Footer />
    </div>
  );
};

export default Home;
