import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";

const Home = () => {
  // Carousel data
  const slides = [
    {
      image: "https://via.placeholder.com/1920x600?text=Marketing+PR",
      title: "Telling Stories that Move the World",
      subtitle:
        "Crafting global brand narratives with African excellence in Marketing & PR.",
      buttonText: "Speak with Us",
      buttonLink: "mailto:info@hnaya.it.com",
    },
    {
      image: "https://via.placeholder.com/1920x600?text=Luxury+Cars",
      title: "Luxury Cars Showcase",
      subtitle:
        "Explore premium car sales and rentals with Hnaya's luxury solutions.",
      buttonText: "Speak with Us",
      buttonLink: "mailto:info@hnaya.it.com",
    },
    {
      image: "https://via.placeholder.com/1920x600?text=Medical+Sector",
      title: "Medical Sector Innovation",
      subtitle: "Advanced medical equipment for global healthcare excellence.",
      buttonText: "Speak with Us",
      buttonLink: "mailto:info@hnaya.it.com",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="relative h-96 bg-gray-900 text-white overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center p-4">
              <div>
                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-6">{slide.subtitle}</p>
                <button
                  onClick={() => (window.location.href = slide.buttonLink)}
                  className="bg-sky-blue text-white px-6 py-3 rounded hover:bg-fresh-green transition"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Rest of the content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-deep-purple mb-8">
            Trusted Across Continents
          </h2>
          <p className="text-lg mb-8">
            Africa • Asia • North America • Middle East • Europe
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-sky-blue">
                Client Testimonial
              </h3>
              <p>
                "Hnaya transformed our brand's reach globally. Exceptional!" –
                CEO, Global Tech
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-sky-blue">
                Our Mission
              </h3>
              <p>
                We connect luxury, health, and marketing worlds for sustainable
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
