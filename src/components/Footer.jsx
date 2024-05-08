import React from "react";
import { ReactComponent as Twitter } from "../assets/twitter_icon.svg";
import { ReactComponent as Instagram } from "../assets/instagram_icon.svg";
import "../css/Footer.css";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Copyright &copy; {currentYear} Reeka</p>
      <div className="social-media">
        <Twitter />
        <Instagram />
      </div>
    </footer>
  );
};

export default Footer;
