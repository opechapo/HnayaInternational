import React from "react";

const Portfolio = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-deep-purple text-center mb-8">
          Portfolio
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add portfolio items similar to Gallery */}
          <div className="bg-gray-100 p-4 rounded">
            <img
              src="https://via.placeholder.com/400?text=Project+1"
              alt="Project"
              className="w-full mb-2"
            />
            <h3 className="text-deep-purple">Global Brand Launch</h3>
            <p>Marketing campaign for luxury auto.</p>
          </div>
          {/* Repeat for more */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
