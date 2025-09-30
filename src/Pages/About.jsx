import React from "react";
import Hero from "../components/Hero";

const About = () => {
  return (
    <>
      <Hero
        title="About Hnaya International"
        subtitle="Your partner in global African innovation."
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-purple text-center mb-8">
            Who We Are
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            Hnaya International is on a mission to bridge African excellence
            with global opportunities in marketing, luxury cars, and medical
            equipment. Based in Lagos, we deliver award-winning solutions.
          </p>
          <div className="text-center">
            <button
              onClick={() =>
                (window.location.href = "mailto:info@hnaya.it.com")
              }
              className="bg-sky-blue text-white px-6 py-3 rounded hover:bg-fresh-green transition"
            >
              Speak with Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
