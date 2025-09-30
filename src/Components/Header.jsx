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
            <Link to="/" className="text-deep-purple hover:text-sky-blue">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-deep-purple hover:text-sky-blue">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-deep-purple hover:text-sky-blue"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-deep-purple hover:text-sky-blue"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-deep-purple hover:text-sky-blue"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          onClick={() => (window.location.href = "mailto:info@hnaya.it.com")}
          className="bg-sky-blue text-white px-4 py-2 rounded hover:bg-fresh-green transition"
        >
          Speak with Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
