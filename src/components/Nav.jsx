import React, { useState } from "react";
import NavItem from "./NavItem.jsx";
import { ReactComponent as Hamburger } from "../images/hamburger.svg";

const Nav = () => {
  const [navState, setNavState] = useState(false);

  const handleMenuClick = () => {
    setNavState(!navState);
  };

  return (
    <nav className="md:col-span-1 md:static fixed top-0 left-0 w-full md:w-auto flex md:block flex-col border-b-2 md:border-0 border border-gray-400 text-white">
      <div
        className="md:hidden flex flex-row justify-end items-center py-2 px-4"
        onClick={handleMenuClick}
      >
        <div className="cursor-pointer flex flex-col items-center">
          <img src={Hamburger} />
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
        <NavItem page="/resume" title="Resume" setNavState={setNavState} />
        <NavItem page="/contact" title="Contact" setNavState={setNavState} />
        <NavItem page="/projects" title="Projects" setNavState={setNavState} />
      </ul>
    </nav>
  );
};

export default Nav;
