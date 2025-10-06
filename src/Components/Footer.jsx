import React from "react";
import hnayaLogo from "../assets/hnaya_logo1.png"; // Import the logo image

const Footer = () => {
  const whatsappNumber = "+2348188800000"; // Replace with your WhatsApp number

  return (
    <footer className="bg-purple-400 text-black py-6 sm:py-8">
      <div className="container mx-auto px-4 text-center">
        <img
          src={hnayaLogo}
          alt="Hnaya International Logo"
          className="w-40 sm:w-48 md:w-52 h-auto mb-4 sm:mb-6 mx-auto"
        />
        <p className="mb-4 text-sm sm:text-base md:text-lg">
          © 2025 Hnaya International. All rights reserved. www.hnaya.it.com
        </p>
        <div className="flex justify-center space-x-3 sm:space-x-4 mb-4 text-sm sm:text-base md:text-lg">
          <a
            href="https://facebook.com/hnaya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/hnaya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/hnaya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Twitter/X
          </a>
          <a
            href="https://linkedin.com/company/hnaya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex justify-center space-x-2 sm:space-x-3">
          <button
            onClick={() =>
              window.open(`https://wa.me/${whatsappNumber}`, "_blank")
            }
            className="bg-green-300 text-purple-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-blue-300 transition text-sm sm:text-base md:text-lg"
          >
            WhatsApp
          </button>
          <button
            onClick={() => (window.location.href = "mailto:info@hnaya.it.com")}
            className="bg-blue-300 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-green-300 transition text-sm sm:text-base md:text-lg"
          >
            Email Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
