import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aboutcontent from "../components/Aboutcontent";
import HeroImage2 from "../components/HeroImage2";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2
        heading="About Me!"
        text="I'm a friendly Front-End Developer."
      />
      <Aboutcontent text="Contact" link="/Contact" />
      <Footer />
    </div>
  );
};

export default About;
