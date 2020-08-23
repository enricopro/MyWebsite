import React from 'react';
import '../App.css';
import { FaGithub } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

function Social() {
  return (
    <div className="SocialContainer">
      <div className="SocialIcon">
        <a href="https://github.com/enricopro" target="_blank">
          <FaGithub size="24" color="white"/>
        </a>
      </div>
      <div className="SocialIcon">
        <a href="https://www.reddit.com/user/ed2212/" target="_blank">
          <FaReddit size="24" color="white"/>
        </a>
      </div>
      <div className="SocialIcon">
      <a href="https://talent.start2impact.it/profile/enrico-d-alberton" target="_blank">
        <BiRocket size="24" color="white"/>
      </a>
      </div>
      <div className="SocialIcon">
      <a href="mailto:dalbertonenrico@gmail.com?subject=subject&message=message" target="_blank">
        <FiMail size="24" color="white"/>
      </a>
      </div>
    </div>
  );
}

export default Social;
