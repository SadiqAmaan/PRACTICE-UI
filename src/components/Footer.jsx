import React from "react";
import { AiFillMail, AiFillGithub } from "react-icons/ai";
import {FiPhoneCall} from "react-icons/fi";

const footer = () => {
  return (
    <footer>
      <div className="name">PRACTICE-UI</div>
      <div className="contact-footer">
        CONTACT US on -{" "}
        <span>
          <FiPhoneCall /> 7007384481 | <AiFillMail /> amaankhan1666@gmail.com
        </span>
      </div>
      <div className="github">
        Source Code on{" "}
      <a href="https://github.com/SadiqAmaan/PRACTICE-UI"> <AiFillGithub /> https://github.com/SadiqAmaan/PRACTICE-UI</a>
      </div>
    </footer>
  );
};

export default footer;
