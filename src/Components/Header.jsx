import React from "react";
import { Link } from "react-router-dom";
import hnayaLogo from "../assets/hnaya_logo1.png"; // Import the logo image

const Header = () => {
  return (
    <header className="bg-transparent sticky top-0  bottom-5 z-50 h-35 pb-15">
      {" "}
      {/* Changed h-22 to h-24 */}
      <nav className="container mx-auto px-4 py-0 md:py-2 flex justify-between items-center">
        <Link to="/">
          <img
            src={hnayaLogo}
            alt="Hnaya International Logo"
            className="h-40 md:h-32 lg:h-40" // Adjust height: default 40, md: 32, lg+: 40
          />
        </Link>
        <ul className="flex space-x-6 text-4xl md:text-lg lg:text-xl">
          <li>
            <Link to="/" className="text-black hover:text-sky-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black hover:text-sky-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-black hover:text-sky-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-black hover:text-sky-400">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black hover:text-sky-400">
              Contact
            </Link>
          </li>
        </ul>
        <button
          onClick={() => (window.location.href = "mailto:info@hnaya.it.com")}
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition cursor-pointer text-xl md:text-lg lg:text-xl md:px-3 lg:px-4"
        >
          Speak with Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
