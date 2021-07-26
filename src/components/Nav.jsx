import React, { useState } from "react";
import NavItem from "./NavItem.jsx";

const Nav = () => {
  const [navState, setNavState] = useState(false);

  const handleMenuClick = () => {
    setNavState(!navState);
  };

  return (
    <nav className="md:col-span-1 md:static fixed top-0 left-0 w-full md:w-auto flex md:block flex-col border-b-2 md:border-0 border border-gray-400 text-white z-50">
      <div
        className="md:hidden flex flex-row justify-end items-center py-2 px-4"
        onClick={handleMenuClick}
      >
        <div className="cursor-pointer flex flex-col items-center">
          <svg
            fill="#ffffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
          </svg>
          <span className="uppercase text-xs">Menu</span>
        </div>
      </div>
      <ul
        className={`uppercase space-y-4 text-gray-400 font-bold px-4 py-4 md:p-0 text-lg overflow-hidden flex-col md:flex h-auto ${
          navState ? "flex" : "hidden"
        } items-start md:items-end`}
      >
        <NavItem page="/" title="Home" setNavState={setNavState} />
        <NavItem page="/links" title="Links" setNavState={setNavState} />
        <NavItem page="/contact" title="Contact" setNavState={setNavState} />
        <NavItem page="/projects" title="Projects" setNavState={setNavState} />
      </ul>
    </nav>
  );
};

export default Nav;
