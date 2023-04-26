import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/hrushidhar-inampudi-0320b8260/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/hinampudi" target="_blank" rel="noopener noreferrer">
        {" "}
        <AiFillGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
