import { Link } from "gatsby";
import React from "react";
import Page from "../components/Page.jsx";

import ProjectCard from "../components/ProjectCard.jsx";

const Home = ({ repos }) => {
  return (
    <Page>
      <h2 className="text-white md:text-3xl text-3xl font-bold">About Me</h2>
      <p>
        My name is Alex Dinger and I am a Frontend Developer living in New
        Jersey. I work mostly with javascript using tools like React and
        Tailwind CSS.
      </p>
      <button className="hidden px-4 py-2 rounded-sm bg-transparent border-white border hover:text-gray-800 transition duration-300 text-lg hover:bg-white font-bold text-white self-center">
        Contact Me
      </button>

      <h2 className="text-white md:text-3xl text-3xl font-bold">
        Recent Projects
      </h2>
      {repos?.map((repo, index) => {
        return <ProjectCard repo={repo} key={index} />;
      })}
      <Link
        to="/projects"
        className="w-full py-3 text-center bg-gray-700 rounded-sm hover:bg-gray-800"
      >
        See More
      </Link>
    </Page>
  );
};

export default Home;
