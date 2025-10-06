import React, { useState } from "react";
import { Link } from "react-router-dom";
import hnayaLogo from "../assets/hnaya_logo1.png"; // Import the logo image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent sticky top-0 z-50 h-20 sm:h-24">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={hnayaLogo}
            alt="Hnaya International Logo"
            className="h-16 sm:h-20 md:h-24 lg:h-28"
          />
        </Link>

        {/* Hamburger Icon (Visible on Mobile) */}
        <button
          className="md:hidden text-black focus:outline-none cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 text-lg sm:text-base md:text-lg lg:text-xl transition-all duration-300`}
        >
          <li>
            <Link
              to="/"
              className="text-black hover:text-sky-400 block"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black hover:text-sky-400 block"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-black hover:text-sky-400 block"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-black hover:text-sky-400 block"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-black hover:text-sky-400 block"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Speak with Us Button */}
        <button
          onClick={() => (window.location.href = "mailto:info@hnaya.it.com")}
          className="hidden md:block bg-purple-700 text-white px-3 sm:px-4 py-2 rounded hover:bg-purple-500 transition text-base sm:text-lg md:text-xl cursor-pointer"
        >
          Speak with Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
