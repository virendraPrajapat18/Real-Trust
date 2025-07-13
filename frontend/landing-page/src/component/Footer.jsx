import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1f4d] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left - Rights */}
        <div className="text-sm mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} All rights reserved
        </div>

        {/* Center - Logo */}
        <div className="mb-4 md:mb-0">
          <img src="/logo.svg" alt="Logo" className="h-12 w-auto mx-auto" />
        </div>

        {/* Right - Socials */}
        <div className="flex space-x-4 text-white text-lg">
          <a href="#" aria-label="Instagram" className="hover:text-orange-400">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-orange-400">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-orange-400">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-orange-400">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
