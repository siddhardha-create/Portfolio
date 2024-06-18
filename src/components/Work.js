import React from "react";
// import pro1 from "../assets/pro1.avif";
// import { NavLink } from "react-router-dom";
import Projectcarddata from "./Projectcarddata";
import Projectcard from "./Projectcard";
import "../css/work.css";

const work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {Projectcarddata.map((val, ind) => {
          return (
            <Projectcard
              key={ind}
              imagesrc={val.imagesrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default work;
