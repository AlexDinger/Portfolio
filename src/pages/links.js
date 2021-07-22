import React from "react";
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";
import Page from "../components/Page.jsx";

const Links = () => {
  return (
    <Page>
      <h2 className="text-3xl text-white font-bold ">Links</h2>
      <a href="https://github.com/alexdinger">
        <div className="flex flex-row space-x-5 items-center">
          <img src={Github} width="32px" />
          <span className="text-xl text-white font-bold ">GitHub</span>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/alex-dinger-792130195/">
        <div className="flex flex-row space-x-5 items-center">
          <img src={Linkedin} width="32px" />
          <span className="text-xl text-white font-bold ">LinkedIn</span>
        </div>
      </a>
    </Page>
  );
};

export default Links;
