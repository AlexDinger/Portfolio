import React from "react";
import { Link } from "gatsby";

const NavItem = ({ active, page, title, exact, setNavState, repos = {} }) => {
  return (
    <li
      onClick={() => {
        setNavState(false);
      }}
    >
      <Link
        to={page}
        activeClassName="active"
        className={`hover:text-white transition duration-300 ease-in-out`}
        repos={repos}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
