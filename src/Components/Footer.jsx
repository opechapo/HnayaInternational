import React from "react";
import hnayaLogo from "../assets/hnaya_logo1.png"; // Import the logo image

const Footer = () => {
  const whatsappNumber = "+2341234567890"; // Replace with your WhatsApp number

  return (
    <footer className="bg-purple-400 text-black py-8">
      <div className="container mx-auto px-4 text-center">
        <img
          src={hnayaLogo}
          alt="Hnaya International Logo"
          className="w-52 h-auto mb-6 mx-auto"
        />
        <p className="mb-4">
          © 2025 Hnaya International. All rights reserved. www.hnaya.it.com
        </p>
        <div className="flex justify-center space-x-4 mb-4 cursor-pointer hover:text-white">
          <a
            href="https://facebook.com/hnaya"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/hnaya"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/hnaya"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter/X
          </a>
          <a
            href="https://linkedin.com/company/hnaya"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <button
          onClick={() =>
            window.open(`https://wa.me/${whatsappNumber}`, "_blank")
          }
          className="bg-green-300 text-purple-700 px-4 py-2 rounded hover:bg-blue-300 transition mr-2 cursor-pointer"
        >
          WhatsApp
        </button>
        <button
          onClick={() => (window.location.href = "mailto:info@hnaya.it.com")}
          className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-green-300 transition cursor-pointer"
        >
          Email Us
        </button>
      </div>
    </footer>
  );
};

export default Footer;
