import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import "../index.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className="nav-link">
        <h1>Siddhardh</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" className="nav-link">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/About" className="nav-link">
            <h1>About Me</h1>
          </Link>
        </li>
        <li>
          <Link to="/Project" className="nav-link">
            <h1>Projects</h1>
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="nav-link">
            <h1>Contact</h1>
          </Link>
        </li>
      </ul>
      <div className="Hamburger" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};
export default Navbar;
