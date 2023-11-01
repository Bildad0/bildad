import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { RiGithubLine } from "react-icons/ri";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <ul className="lists" >
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bildad0">

            <RiGithubLine />
            <title>github</title>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/iambildad/">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bildad-owuor/">
            <ImLinkedin2 />
          </a>
        </li>
        <li>

          <a target="_blank" rel="noopener noreferrer" href=" mailto:bildadowuor@gmail.com">

            <AiOutlineMail />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
