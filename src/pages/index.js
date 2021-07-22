import * as React from "react";
import { useState, useEffect } from "react";
import { Router } from "@reach/router";

// Pages
import Home from "./home.js";
import Contact from "./contact.js";
import Projects from "./projects.js";
import Resume from "./resume.js";
import Links from "./links.js";

const IndexPage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    const result = await fetch(
      "https://api.github.com/users/alexdinger/repos?sort=updated"
    ).then((res) => res.json());

    setRepos(result.slice(0, 3));
  }, []);

  return <Home path="/" repos={repos} />;
};

export default IndexPage;
