import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Active link styling helper
  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold underline underline-offset-4"
      : "text-gray-700";

  return (
    <nav className="flex items-center justify-between px-12 py-2 shadow-md bg-white w-full">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="logo" className="h-32 w-32" />
        {/* <span className="text-xl font-bold text-gray-800">
          <span className="text-blue-600">Real</span>Trust
        </span> */}
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-6 text-sm font-medium">
        <li>
          <Link
            to="/projects"
            className={`hover:text-blue-600 ${isActive("/projects")}`}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="/clients"
            className={`hover:text-blue-600 ${isActive("/clients")}`}
          >
            CLIENTS
          </Link>
        </li>
        <li>
          <Link
            to="/contacts"
            className={`hover:text-blue-600 ${isActive("/contacts")}`}
          >
            CONTACT-PERSON
          </Link>
        </li>
        <li>
          <Link
            to="/newsletter"
            className={`hover:text-blue-600 ${isActive("/newsletter")}`}
          >
            SUBSCRIBED-EMAIL
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
