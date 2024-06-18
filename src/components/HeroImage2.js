import "../css/HeroImage2.css";
import React, { Component } from "react";

class HeroImage2 extends Component {
  render() {
    return (
      <div className="heros-img">
        <div className="image"> </div>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImage2;
