import React, { useState } from "react";
import ProjectImage from "./ProjectImage";
import ProjectLinkButton from "./ProjectLinkButton";
import moment from "moment";

const ProjectCard = ({ repo }) => {
  return (
    <div className="border-2 border-gray-300 rounded-sm">
      {repo.homepage ? (
        <ProjectImage
          image={`https://api.apiflash.com/v1/urltoimage?access_key=486af60e4c44448f8dceda7e9fdadace&url=${repo.homepage}`}
        />
      ) : (
        ""
      )}

      <div className="md:p-7 p-3 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <a
            href={repo.html_url}
            className="underline font-bold transition duration-300 ease-in-out text-gray-400 hover:text-white md:text-3xl text-2xl"
          >
            {repo.name}
          </a>
          <div className="space-x-3">
            {repo.homepage ? (
              <ProjectLinkButton url={repo.homepage} name="Live Site" />
            ) : (
              ""
            )}
            <ProjectLinkButton url={repo.html_url} name="Github" />
          </div>
        </div>

        <p className="mt-7">{repo?.description}</p>
        <span className="md:text-sm text-xs text-gray-600 italic w-full text-right mt-4">
          {`Updated on ${moment(repo.updated_at).format("MM/DD/YYYY")}`}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
