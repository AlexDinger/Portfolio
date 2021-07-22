import React from "react";

const Page = ({ children }) => {
  return (
    <div className="space-y-5 text-gray-300 text-lg flex flex-col page">
      {children}
    </div>
  );
};

export default Page;
