import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        {" "}
        <AiFillGithub />
      </a>
      <a href="https://dribble.com" target="_blank" rel="noopener noreferrer">
        <AiFillDribbbleCircle />
      </a>
    </div>
  );
};

export default HeaderSocials;
