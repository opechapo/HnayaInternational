import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import luxuryCar from "../assets/luxury car.png"; // Import luxury car image
import clientsImage from "../assets/clients.png"; // Import clients image
import medical from "../assets/medical section.png"; // Import medical image
import nextImage from "../assets/Next.png"; // Import background image for header
import thunder from "../assets/thunder image.png"; // Import image for right side
import newMarketing from "../assets/new marketing.jpg"; // Import image for right side

// Import images for "Some of Our Work" section
import StrategicPRLaunchforLuxuryAutoExpo from "../assets/Strategic PR Launch for Luxury Auto Expo.jpg";
import MediaRolloutforAdvancedMRISystems from "../assets/Media Rollout for Advanced MRI Systems.jpg";
import LuxuryCarRentalShowcaseEvent from "../assets/Luxury Car Rental Showcase Event.webp";
import EndorsementCampaignforSurgicalRobots from "../assets/Endorsement Campaign for Surgical Robots.jpg";
import BrandStrategyforRenewableEnergyFirm from "../assets/Brand Strategy for Renewable Energy Firm.webp";
import PRSupportforLuxuryCarAuction from "../assets/PR Support for Luxury Car Auction.jpg";
import AwarenessCampaignforMedicalEquipment from "../assets/Awareness Campaign for Medical Equipment.jpg";
import InfluencerCampaignforTechInnovation from "../assets/Influencer Campaign for Tech Innovation.png";
import ConsultingforLuxuryCarBrandExpansion from "../assets/Consulting for Luxury Car Brand Expansion.webp";
import StrategicPlanningforHospitalEquipment from "../assets/Strategic Planning for Hospital Equipment.jpg";

const Home = () => {
  // Carousel data
  const slides = [
    {
      image: newMarketing,
      title: "Telling Stories that Move the World",
      subtitle:
        "Crafting global brand narratives with African excellence in Marketing & PR.",
      buttonText: "Speak with Us",
      buttonLink: "mailto:info@hnaya.it.com",
    },
    {
      image: luxuryCar,
      title: "Luxury Cars Showcase",
      subtitle:
        "Explore premium car sales and rentals with Hnaya's luxury solutions.",
      buttonText: "Speak with Us",
      buttonLink: "mailto:info@hnaya.it.com",
    },
    {
      image: medical,
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

  // Work items data with imported images
  const workItems = [
    {
      image: StrategicPRLaunchforLuxuryAutoExpo,
      title: "Strategic PR Launch for Luxury Auto Expo",
      description:
        "Orchestrated a high-profile press event for a luxury car brand's African debut, showcasing premium models like the Mercedes S-Class.",
    },
    {
      image: MediaRolloutforAdvancedMRISystems,
      title: "Media Rollout for Advanced MRI Systems",
      description:
        "Managed a successful PR campaign for a new MRI scanner rollout across Nigerian hospitals, highlighting cutting-edge medical tech.",
    },
    {
      image: LuxuryCarRentalShowcaseEvent,
      title: "Luxury Car Rental Showcase Event",
      description:
        "Planned and executed an exclusive event featuring BMW X7 rentals for elite clients in Lagos, boosting brand visibility.",
    },
    {
      image: EndorsementCampaignforSurgicalRobots,
      title: "Endorsement Campaign for Surgical Robots",
      description:
        "Collaborated with top surgeons to endorse a new surgical robot, enhancing its adoption in West African medical facilities.",
    },
    {
      image: BrandStrategyforRenewableEnergyFirm,
      title: "Brand Strategy for Renewable Energy Firm",
      description:
        "Developed a comprehensive PR strategy for a renewable energy company entering the African market, focusing on sustainability.",
    },
    {
      image: PRSupportforLuxuryCarAuction,
      title: "PR Support for Luxury Car Auction",
      description:
        "Provided media coverage and influencer engagement for a high-stakes luxury car auction featuring rare models.",
    },
    {
      image: AwarenessCampaignforMedicalEquipment,
      title: "Awareness Campaign for Medical Equipment",
      description:
        "Launched a nationwide campaign to promote affordable medical equipment rentals, targeting rural healthcare centers.",
    },
    {
      image: InfluencerCampaignforTechInnovation,
      title: "Influencer Campaign for Tech Innovation",
      description:
        "Partnered with influencers to promote a tech-driven PR initiative, connecting brands with African tech enthusiasts.",
    },
    {
      image: ConsultingforLuxuryCarBrandExpansion,
      title: "Consulting for Luxury Car Brand Expansion",
      description:
        "Advised a luxury car manufacturer on market entry strategies into East Africa, ensuring a seamless launch.",
    },
    {
      image: StrategicPlanningforHospitalEquipment,
      title: "Strategic Planning for Hospital Equipment",
      description:
        "Crafted a long-term strategy for a medical equipment supplier to penetrate the South African healthcare market.",
    },
  ];

  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="relative min-h-[800px] flex items-center justify-center overflow-hidden mt-[-2px]">
        <div
          className="w-[1700px] h-[800px] mb-5 rounded-lg overflow-hidden relative 
                        lg:w-[1400px] lg:h-[700px] 
                        md:w-[700px] md:h-[400px] 
                        sm:w-[500px] sm:h-[300px] 
                        xs:w-[320px] xs:h-[250px]"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-opacity-50 rounded-lg"></div>
              <div className="relative z-10 text-center flex items-center justify-center h-full p-4 sm:p-3 xs:p-2">
                <div>
                  <h1
                    className="text-7xl font-extrabold mb-4 text-white 
                                lg:text-5xl 
                                md:text-4xl 
                                sm:text-2xl 
                                xs:text-xl"
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="text-3xl font-bold mb-4 text-white 
                              lg:text-xl 
                              md:text-lg 
                              sm:text-base 
                              xs:text-sm"
                  >
                    {slide.subtitle}
                  </p>
                  <button
                    onClick={() => (window.location.href = slide.buttonLink)}
                    className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition cursor-pointer 
                              lg:w-48 lg:h-12 lg:text-lg 
                              md:w-40 md:h-10 md:text-base 
                              sm:w-36 sm:h-9 sm:text-sm 
                              xs:w-32 xs:h-8 xs:text-xs"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* New Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-24 max-w-7xl mx-auto">
            {/* Typography Section (Left) */}
            <div className="w-full md:w-1/2">
              <h1
                className="text-4xl font-bold text-purple-700 mb-6 relative"
                style={{
                  backgroundImage: `url(${nextImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding: "20px",
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                Building the next global African brands
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 md:text-lg sm:text-base">
                With a presence in 8 African countries, we are committed to
                driving the growth of the continent by providing organizations a
                comprehensive approach with the speed and agility required to
                propel their business forward.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 md:text-lg sm:text-base">
                Our research-based strategy means we kick-off our work with you
                by immersing ourselves in your industry, your vision, your
                culture and your market - working shoulder to shoulder with you
                to build creative and strategic solutions to your challenges.
              </p>
              <br />
              <br />
              <br />
              <button
                onClick={() =>
                  (window.location.href = "mailto:info@hnaya.it.com")
                }
                className="bg-[#8200DB] text-white px-6 py-3 rounded hover:bg-purple-800 transition cursor-pointer md:px-4 md:py-2 sm:px-3 sm:py-1"
                style={{ backgroundColor: "#8200DB" }}
              >
                Send us a message
              </button>
            </div>
            {/* Image Section (Right) */}
            <div className="w-full md:w-1/2">
              <img
                src={thunder}
                alt="Thunder image"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Some of Our Work Section */}
      <section className="py-16 bg-gray-100 ">
        <div className="container mx-auto px-4 cursor-pointer">
          <h2 className="text-5xl font-bold text-white text-center mb-8 bg-gradient-to-r from-purple-700 via-sky-400 to-green-400 rounded-full h-20 flex items-center justify-center md:text-4xl sm:text-3xl">
            Some of Our Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workItems.map((work, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                  selectedWork === index
                    ? "border-4 border-gray-600 scale-105"
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
                  <h3 className="text-xl font-semibold text-gray-600 md:text-lg sm:text-base">
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
          <h3 className="text-6xl font-semibold text-gray-700 mb-8 md:text-xl sm:text-lg">
            Who We've Worked With
          </h3>
          <img
            src={clientsImage}
            alt="Our Clients"
            className="w-full max-w-25xl mx-auto rounded-lg md:max-w-6xl sm:max-w-3xl"
          />
        </div>
      </section>

      {/* Trusted Across Continents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-sky-400 to-green-400 mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            Trusted Across Continents
          </h2>
          <p
            className="text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 mb-8"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}
          >
            Africa • Asia • North America • Middle East • Europe
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3 className="text-5xl font-bold text-purple-700 mb-6">
            Testimonials
          </h3>
          <br />
          <br />
          <br />
          <div className="flex flex-row flex-nowrap overflow-x-auto gap-6 mb-8 px-4 snap-x snap-mandatory md:justify-center">
            {/* Testimonial 1 */}
            <div className="min-w-[300px] max-w-[200px] p-6 rounded-lg shadow-lg relative testimonial-card bg-[#8200DB] text-white transform rotate-10 snap-center">
              <p className="text-sm leading-relaxed flex items-center justify-center h-full z-10">
                Creative, committed, and hands-on — Hassan Abdelkarim Chaaban
                and the Hnaya International team were a delight to work with.
                Their impact was so impressive that we rehired them with our own
                funding. Chief Raymond Dokpesi Jr., Executive Chairman, DAAR
                Communications PLC
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="min-w-[300px] max-w-[300px] p-6 rounded-lg shadow-lg relative testimonial-card bg-[#A100F2] text-white transform -rotate-10 snap-center">
              <p className="text-sm leading-relaxed flex items-center justify-center h-full z-10">
                Hnaya International has provided us with amazing support,
                driving the visibility of the CASIO brand through strategic and
                effective media engagement. – Dalia Sharaby, CASIO Middle East &
                Africa
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="min-w-[300px] max-w-[300px] p-6 rounded-lg shadow-lg relative testimonial-card bg-[#C200FF] text-white transform rotate-4 snap-center">
              <p className="text-sm leading-relaxed flex items-center justify-center h-full z-10">
                Hnaya International's innovative approach significantly boosted
                our market presence and visibility. – Nnaemeka Egeonu, CEO,
                ColdHubs
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        {/* Inline CSS for testimonial card design */}
        <style>
          {`
            .testimonial-card::before {
              content: ";;";
              position: absolute;
              top: 10px;
              left: 10px;
              font-size: 24px;
              color: rgba(255, 255, 255, 0.7);
              z-index: 0;
            }
            .testimonial-card::after {
              content: ";;";
              position: absolute;
              bottom: 10px;
              right: 10px;
              font-size: 24px;
              color: rgba(255, 255, 255, 0.7);
              z-index: 0;
            }
            .snap-x {
              scroll-snap-type: x mandatory;
            }
            .snap-center {
              scroll-snap-align: center;
            }
            /* Hide scrollbar but keep functionality */
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
            .overflow-x-auto {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}
        </style>
      </section>
    </>
  );
};

export default Home;
