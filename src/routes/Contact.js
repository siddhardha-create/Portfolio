/*import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form1 from "../components/Form1";
import HeroImage2 from "../components/HeroImage2";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="Contact." text="Lets connect now" />
      <Form1 />
      <Footer />
    </div>
  );
};

export default Contact;*/

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form1 from "../components/Form1";
import HeroImage2 from "../components/HeroImage2";

const Contact = () => {
  const [heroData, setHeroData] = useState({
    heading: "Contact.",
    text: "Lets connect now",
  });

  const handleFormSubmit = () => {
    setHeroData({
      heading: "Thank You!",
      text: "I will reach out to you soon",
    });
  };

  return (
    <div>
      <Navbar />
      <HeroImage2 heading={heroData.heading} text={heroData.text} />
      <Form1 onFormSubmit={handleFormSubmit} />
      <Footer />
    </div>
  );
};

export default Contact;
