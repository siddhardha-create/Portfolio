import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "../css/Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>1-97 Srikakulam</p>
              <p>Srikakulam</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              9390259827
            </h4>
          </div>
          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              siddhardh987@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Myself</h4>
          <p>I am siddhardh</p>
          <div className="social-links">
            <Link to="/facebook" className="social-link">
              <FaFacebook
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            <Link to="/instagram" className="social-link">
              <FaInstagram
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            <Link to="/github" className="social-link">
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            <Link to="/twitter" className="social-link">
              <FaTwitter
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
