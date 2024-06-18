import "../css/Aboutcontent.css";
import about1 from "../assets/about2.avif";
import about2 from "../assets/about1.avif";

import React from "react";
import { Link } from "react-router-dom";

const Aboutcontent = (props) => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          Im a react front-end Developer. I create responsive friendly websites
          for myself
        </p>
        <Link to={props.link}>
          <button className="button">{props.text}</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="img-stack top ">
            <img src={about1} className="img" alt="true"></img>
          </div>
          <div className="img-stack bottom">
            <img src={about2} className="img" alt="true"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
