import React from "react";

// Import images for "Portfolio" section
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

const Portfolio = () => {
  // Portfolio items data
  const portfolioItems = [
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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-bold text-purple-700 text-center mb-8 
                     lg:text-5xl 
                     md:text-4xl 
                     sm:text-3xl 
                     xs:text-2xl"
        >
          Portfolio
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 w-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover 
                           lg:h-72 
                           md:h-56 
                           sm:h-48 
                           xs:h-40"
              />
              <div className="p-4 sm:p-3 xs:p-2">
                <h3
                  className="text-xl font-semibold text-purple-700 
                             lg:text-2xl 
                             md:text-lg 
                             sm:text-base 
                             xs:text-sm"
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-600 
                             lg:text-base 
                             md:text-sm 
                             sm:text-xs 
                             xs:text-xs"
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
