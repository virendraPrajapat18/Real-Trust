import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex  items-center justify-between px-12 py-2 shadow-md bg-white w-full">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="logo" className="h-32 w-32" />
        {/* <span className="text-xl font-bold text-gray-800">
          <span className="text-blue-600">Real</span>Trust
        </span> */}
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-6 text-sm font-medium text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">HOME</li>
        <li className="hover:text-blue-600 cursor-pointer">SERVICES</li>
        <li className="hover:text-blue-600 cursor-pointer">ABOUT</li>
        <li className="hover:text-blue-600 cursor-pointer">PROJECTS</li>
        <li className="hover:text-blue-600 cursor-pointer">TESTIMONIALS</li>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2">
          CONTACT
        </Button>
      </ul>

      {/* Contact Button */}
      {/* <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2">
        CONTACT
      </Button> */}
    </nav>
  );
};

export default Navbar;
