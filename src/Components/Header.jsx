import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-deep-purple">
          Hnaya International
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-purple-700 hover:text-sky-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-purple-700 hover:text-sky-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-purple-700 hover:text-sky-400">
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-purple-700 hover:text-sky-400"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-purple-700 hover:text-sky-400">
              Contact
            </Link>
          </li>
        </ul>
        <button
          onClick={() => (window.location.href = "mailto:info@hnaya.it.com")}
          className="bg-sky-400 text-black px-4 py-2 rounded hover:bg-green-300 transition cursor-pointer"
        >
          Speak with Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
