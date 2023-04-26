import React from "react";
import "./footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Hrushidhar
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com">
          <AiFillGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hrushidhar @2023. All Rights Reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
