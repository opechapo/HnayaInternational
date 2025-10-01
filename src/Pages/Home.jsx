import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import marketingCampaign from "../assets/Marketing campaign.png"; // Import marketing image
import luxuryCar from "../assets/luxury car.png"; // Import luxury car image
import mriScanner from "../assets/MRI Scanner.png"; // Import MRI scanner image
import clientsImage from "../assets/clients.png"; // Import clients image

const Home = () => {
  // Carousel data
  const slides = [
    {
      image: marketingCampaign, // Replace with imported image
      title: "Telling Stories that Move the World",
      subtitle:
        "Crafting global brand narratives with African excellence in Marketing & PR.",
      buttonText: "Speak with Us",
      buttonLink: "mailto:info@hnaya.it.com",
    },
    {
      image: luxuryCar, // Replace with imported image
      title: "Luxury Cars Showcase",
      subtitle:
        "Explore premium car sales and rentals with Hnaya's luxury solutions.",
      buttonText: "Speak with Us",
      buttonLink: "mailto:info@hnaya.it.com",
    },
    {
      image: mriScanner, // Replace with imported image
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
      <section className="relative h-240 text-white overflow-hidden">
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
            <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center text-center p-4 sm:p-2">
              <div>
                <h1 className="text-8xl font-bold mb-4 md:text-6xl sm:text-4xl">
                  {slide.title}
                </h1>
                <p className="text-4xl mb-6 md:text-2xl sm:text-xl">
                  {slide.subtitle}
                </p>
                <button
                  onClick={() => (window.location.href = slide.buttonLink)}
                  className="bg-blue-400 text-white px-6 py-3 rounded hover:bg-green-700 transition cursor-pointer w-70 h-15 md:w-60 md:h-12 sm:w-40 sm:h-10"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <br />
      <br />
      <br />
      <br />

      {/* New Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-10xl font-bold text-deep-purple mb-6 md:text-4xl sm:text-3xl">
            We are on a mission to build the next global African Brands.
          </h1>
          <br />
          <br />
          <br />
          <p className="text-3xl text-gray-700 leading-relaxed md:text-xl sm:text-lg">
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
          <br />

          <button
            onClick={() => (window.location.href = "mailto:info@hnaya.it.com")}
            className="mt-8 bg-blue-400 text-black px-6 py-3 rounded hover:bg-green-300 transition cursor-pointer md:px-4 md:py-2 sm:px-3 sm:py-1"
          >
            Got a project? Speak with Us
          </button>
        </div>
      </section>

      {/* Some of Our Work Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white text-center mb-8 bg-gradient-to-r from-purple-700 via-sky-400 to-green-400 rounded-full h-20 flex items-center justify-center md:text-4xl sm:text-3xl">
            Some of Our Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workItems.map((work, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                  selectedWork === index
                    ? "border-4 border-purple-700 scale-105"
                    : "hover:shadow-lg hover:scale-105"
                } md:w-full sm:w-full`}
                onClick={() =>
                  setSelectedWork(index === selectedWork ? null : index)
                }
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-48 object-cover md:h-40 sm:h-32"
                />
                <div className="p-4 sm:p-2">
                  <h3 className="text-xl font-semibold text-purple-700 md:text-lg sm:text-base">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-xs sm:text-xs">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-8 bg-gradient-to-r from-purple-700 via-sky-400 to-green-400 rounded-full h-20 flex items-center justify-center md:text-4xl sm:text-3xl">
            Our Clients
          </h1>
          <h3 className="text-2xl font-semibold text-gray-700 mb-8 md:text-xl sm:text-lg">
            Who We've Worked With
          </h3>
          <img
            src={clientsImage}
            alt="Our Clients"
            className="w-full max-w-15xl mx-auto rounded-lg md:max-w-6xl sm:max-w-3xl"
          />
        </div>
      </section>

      {/* Trusted Across Continents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 md:text-2xl sm:text-xl">
            Trusted Across Continents
          </h2>
          <p className="text-lg mb-8 md:text-base sm:text-sm">
            Africa • Asia • North America • Middle East • Europe
          </p>
          <div className="flex flex-col md:flex-row gap-8 sm:gap-4 justify-center">
            <div className="w-full md:w-1/2 p-4 md:p-6 bg-white rounded-lg">
              <h3 className="text-2xl font-bold text-blue-300 md:text-xl sm:text-lg mb-4">
                Client Testimonial
              </h3>
              <p className="text-gray-600 md:text-sm sm:text-xs leading-relaxed">
                "Creative, intentional, and not afraid of the grunt work. Hassan
                Abdelkarim Chaaban and the team at Hnaya International are a
                delight. The engagement of Hnaya International as our marketing
                advisory partner was absolutely fantastic! In fact, we have
                re-engaged them with our own financing for additional work." –
                Chief Raymond Dokpesi Jr., Executive Chairman, DAAR
                Communications PLC
                <br />
                <br />
                "Hnaya International has provided us with amazing support,
                driving the visibility of the CASIO brand through strategic and
                effective media engagement." – Dalia Sharaby, CASIO Middle East
                & Africa
                <br />
                <br />
                "Hnaya International's innovative approach significantly boosted
                our market presence and visibility." – Nnaemeka Egeonu, CEO,
                ColdHubs
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-6 bg-white rounded-lg">
              <h3 className="text-xl font-semibold text-blue-300 md:text-lg sm:text-base mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 md:text-sm sm:text-xs leading-relaxed">
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
