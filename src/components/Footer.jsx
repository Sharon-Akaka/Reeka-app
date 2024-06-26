import React from "react";
import { ReactComponent as Twitter } from "../assets/twitter_icon.svg";
import { ReactComponent as Instagram } from "../assets/instagram_icon.svg";
import { ReactComponent as Medium } from "../assets/medium_icon.svg";
import "../css/Footer.css";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer>
      <hr />
      <div className="footer">
        <p>Copyright &copy; {currentYear} Reeka</p>
        <div className="social-media">
          <Twitter />
          <Instagram />
          <Medium />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
