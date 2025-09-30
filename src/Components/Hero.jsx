import React from "react";

const Hero = ({
  title,
  subtitle,
  bgImage = "https://via.placeholder.com/1920x600?text=Hnaya+Hero",
}) => {
  return (
    <section
      className="bg-cover bg-center h-96 flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded text-center">
        <h1 className="text-4xl font-bold mb-4 text-fresh-green">{title}</h1>
        <p className="text-xl">{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
