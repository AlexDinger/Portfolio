import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import Page from "../components/Page.jsx";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    const result = await fetch(
      "https://api.github.com/users/alexdinger/repos?sort=updated"
    ).then((res) => res.json());

    setRepos(result);
  }, []);

  return (
    <Page>
      <div className="space-y-5">
        <h2 className="text-white md:text-3xl text-3xl font-bold">Projects</h2>
        {repos?.map((repo, index) => {
          return <ProjectCard repo={repo} key={index} />;
        })}
      </div>
    </Page>
  );
};

export default Projects;
