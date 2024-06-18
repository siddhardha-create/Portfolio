import "../css/Heroimage.css";
import React, { useEffect, useRef } from "react";
import heroimg from "../assets/backgrnd.avif";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Heroimage = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        '<span style="color:crimson;">Program through Java.</span>',
        '<span style="color:#00a8ff;">Immerse in the art of front-end development.</span>',
        '<span style="color:#00a8ff;">Explore the depths of Linux.</span>',
        '<span style="color:#00b894;">Master the intricacies of SQL.</span>',
        '<span style="color:#00b894;">Thrive through the energy of competitive sports.</span>',
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    // Initialize Typed instance
    const typed = new Typed(typedRef.current, options);

    // Clean up Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={heroimg} alt="Introimg"></img>
      </div>
      <div className="content">
        <p>Hello, I'm Siddhardh, eager to</p>
        <h2 ref={typedRef} className="typing"></h2>
        <div className="buttons">
          <Link to="/Project" className="button">
            Projects
          </Link>
          <Link to="/Contact" className="button">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
