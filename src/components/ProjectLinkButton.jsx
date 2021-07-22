import React from "react";

const ProjectLinkButton = ({ url, name }) => {
  return (
    <a
      href={url}
      className="border-2 border-gray-300 transition duration-300 text-gray-300 filter hover:text-gray-900 hover:bg-white hover:border-white rounded-sm px-2 py-1 text-sm font-bold"
    >
      {name}
    </a>
  );
};

export default ProjectLinkButton;
