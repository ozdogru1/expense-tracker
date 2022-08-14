import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "black",
  };
  return (
    <div>
      <nav className="bg-white-800 h-20 flex bg-[#1e293b]	 border-gray-200 px-2 sm:px-4 py-2.5 text-white">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0  ">
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/"
                  className="block py-2 pl-3 pr-4 text-xl font-light	  rounded md:bg-transparent  md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/home"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="block py-2 pl-3 pr-4 text-xl font-light	  rounded md:bg-transparent  md:p-0 dark:text-white"
                >
                  Expense Page
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
