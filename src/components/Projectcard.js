import "../css/Projectcard.css";
import "../index.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Projectcard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imagesrc} alt="project logo" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="button">
            View
          </NavLink>
          <NavLink to={props.source} className="button">
            source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
