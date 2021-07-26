import React from "react";

const Page = ({ children }) => {
  return (
    <div className="md:space-y-5 space-y-10 text-gray-300 text-lg flex flex-col page p-5 md:p-0">
      {children}
    </div>
  );
};

export default Page;
