import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";

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

  // State for clicked image
  const [selectedWork, setSelectedWork] = useState(null);

  // Work items data
  const workItems = [
    {
      image: "https://via.placeholder.com/400x250?text=PR+Campaign",
      title: "Strategic PR Launch for Luxury Auto Expo",
      description:
        "Orchestrated a high-profile press event for a luxury car brand's African debut, showcasing premium models like the Mercedes S-Class.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=Medical+PR",
      title: "Media Rollout for Advanced MRI Systems",
      description:
        "Managed a successful PR campaign for a new MRI scanner rollout across Nigerian hospitals, highlighting cutting-edge medical tech.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=Luxury+Event",
      title: "Luxury Car Rental Showcase Event",
      description:
        "Planned and executed an exclusive event featuring BMW X7 rentals for elite clients in Lagos, boosting brand visibility.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=Medical+Endorsement",
      title: "Endorsement Campaign for Surgical Robots",
      description:
        "Collaborated with top surgeons to endorse a new surgical robot, enhancing its adoption in West African medical facilities.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=PR+Strategy",
      title: "Brand Strategy for Renewable Energy Firm",
      description:
        "Developed a comprehensive PR strategy for a renewable energy company entering the African market, focusing on sustainability.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=Luxury+PR",
      title: "PR Support for Luxury Car Auction",
      description:
        "Provided media coverage and influencer engagement for a high-stakes luxury car auction featuring rare models.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=Medical+Campaign",
      title: "Awareness Campaign for Medical Equipment",
      description:
        "Launched a nationwide campaign to promote affordable medical equipment rentals, targeting rural healthcare centers.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=General+PR",
      title: "Influencer Campaign for Tech Innovation",
      description:
        "Partnered with influencers to promote a tech-driven PR initiative, connecting brands with African tech enthusiasts.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=Luxury+Consulting",
      title: "Consulting for Luxury Car Brand Expansion",
      description:
        "Advised a luxury car manufacturer on market entry strategies into East Africa, ensuring a seamless launch.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=Medical+Strategy",
      title: "Strategic Planning for Hospital Equipment",
      description:
        "Crafted a long-term strategy for a medical equipment supplier to penetrate the South African healthcare market.",
    },
  ];

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

      {/* New Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-3xl font-bold text-deep-purple mb-6">
            We are on a mission to build the next global African Brands.
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a presence in 8 African countries, we are committed to driving
            the growth of the continent by providing organizations a
            comprehensive approach with the speed and agility required to propel
            their businesses forward.
            <br />
            <br />
            Our research-based strategy means we kick-off our work with you by
            immersing ourselves in your industry, your vision, your culture and
            your market- working shoulder to shoulder with you to build creative
            and strategic solutions to your challenges.
          </p>
          <button
            onClick={() => (window.location.href = "mailto:info@hnaya.it.com")}
            className="mt-8 bg-sky-blue text-white px-6 py-3 rounded hover:bg-fresh-green transition"
          >
            Got a project? Speak with Us
          </button>
        </div>
      </section>

      {/* Some of Our Work Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-purple text-center mb-12">
            Some of Our Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workItems.map((work, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                  selectedWork === index
                    ? "border-4 border-deep-purple scale-105"
                    : "hover:shadow-lg hover:scale-105"
                }`}
                onClick={() =>
                  setSelectedWork(index === selectedWork ? null : index)
                }
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-deep-purple">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Across Continents Section */}
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
