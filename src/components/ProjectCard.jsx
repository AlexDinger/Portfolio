import React, { useState } from "react";
import Grouper from "../images/grouper.jpg";
import ProjectImage from "./ProjectImage";
import ProjectLinkButton from "./ProjectLinkButton";
import moment from "moment";

const ProjectCard = ({ repo }) => {
  const [isReadMore, setReadMore] = useState(false);
  const readMoreSpan = (
    <span
      onClick={() => {
        setReadMore(!isReadMore);
      }}
      className=" w-full flex justify-center items-center bg-gradient-to-b  to-black cursor-pointer text-xs"
    >
      Read More
    </span>
  );

  return (
    // <div
    //   className={`flex flex-row ${
    //     isReadMore ? "h-auto" : "h-28"
    //   }  overflow-hidden relative space-x-2`}
    // >
    //   <ProjectImage image={Grouper} />
    //   <div className="space-y-1">
    //     <a
    //       href={repo.html_url}
    //       className="font-bold capitalize transition duration-300 ease-in-out text-gray-400 underline hover:text-white"
    //     >
    //       {repo.name}
    //     </a>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ab sed
    //       animi, hic consequatur quibusdam est. Lorem ipsum dolor sit amet
    //       consectetur, adipisicing elit. Earum ab sed animi, hic consequatur
    //       quibusdam est. Lorem ipsum dolor sit amet consectetur, adipisicing
    //       elit. Earum ab sed animi, hic consequatur quibusdam est.
    //     </p>
    //   </div>
    //   {isReadMore ? "" : readMoreSpan}
    // </div>
    <div className="border-2 border-gray-300 rounded-sm">
      {repo.homepage ? (
        <ProjectImage
          image={`https://api.apiflash.com/v1/urltoimage?access_key=486af60e4c44448f8dceda7e9fdadace&url=${repo.homepage}`}
        />
      ) : (
        ""
      )}

      <div className="p-7 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <a
            href={repo.html_url}
            className="underline font-bold transition duration-300 ease-in-out text-gray-400 hover:text-white text-3xl"
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
        <span className="text-sm text-gray-600 italic w-full text-right mt-4">
          {`Updated on ${moment(repo.updated_at).format("MM/DD/YYYY")}`}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
