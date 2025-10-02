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
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-deep-purple text-center mb-8">
          Portfolio
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio items */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 md:w-full sm:w-full">
            <img
              src={StrategicPRLaunchforLuxuryAutoExpo}
              alt="Strategic PR Launch for Luxury Auto Expo"
              className="w-full h-48 object-cover md:h-40 sm:h-32"
            />
            <div className="p-4 sm:p-2">
              <h3 className="text-xl font-semibold text-purple-700 md:text-lg sm:text-base">
                Strategic PR Launch for Luxury Auto Expo
              </h3>
              <p className="text-gray-600 text-sm md:text-xs sm:text-xs">
                Orchestrated a high-profile press event for a luxury car brand's
                African debut, showcasing premium models like the Mercedes
                S-Class.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 md:w-full sm:w-full">
            <img
              src={MediaRolloutforAdvancedMRISystems}
              alt="Media Rollout for Advanced MRI Systems"
              className="w-full h-48 object-cover md:h-40 sm:h-32"
            />
            <div className="p-4 sm:p-2">
              <h3 className="text-xl font-semibold text-purple-700 md:text-lg sm:text-base">
                Media Rollout for Advanced MRI Systems
              </h3>
              <p className="text-gray-600 text-sm md:text-xs sm:text-xs">
                Managed a successful PR campaign for a new MRI scanner rollout
                across Nigerian hospitals, highlighting cutting-edge medical
                tech.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 md:w-full sm:w-full">
            <img
              src={LuxuryCarRentalShowcaseEvent}
              alt="Luxury Car Rental Showcase Event"
              className="w-full h-48 object-cover md:h-40 sm:h-32"
            />
            <div className="p-4 sm:p-2">
              <h3 className="text-xl font-semibold text-purple-700 md:text-lg sm:text-base">
                Luxury Car Rental Showcase Event
              </h3>
              <p className="text-gray-600 text-sm md:text-xs sm:text-xs">
                Planned and executed an exclusive event featuring BMW X7 rentals
                for elite clients in Lagos, boosting brand visibility.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 md:w-full sm:w-full">
            <img
              src={EndorsementCampaignforSurgicalRobots}
              alt="Endorsement Campaign for Surgical Robots"
              className="w-full h-48 object-cover md:h-40 sm:h-32"
            />
            <div className="p-4 sm:p-2">
              <h3 className="text-xl font-semibold text-purple-700 md:text-lg sm:text-base">
                Endorsement Campaign for Surgical Robots
              </h3>
              <p className="text-gray-600 text-sm md:text-xs sm:text-xs">
                Collaborated with top surgeons to endorse a new surgical robot,
                enhancing its adoption in West African medical facilities.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 md:w-full sm:w-full">
            <img
              src={BrandStrategyforRenewableEnergyFirm}
              alt="Brand Strategy for Renewable Energy Firm"
              className="w-full h-48 object-cover md:h-40 sm:h-32"
            />
            <div className="p-4 sm:p-2">
              <h3 className="text-xl font-semibold text-purple-700 md:text-lg sm:text-base">
                Brand Strategy for Renewable Energy Firm
              </h3>
              <p className="text-gray-600 text-sm md:text-xs sm:text-xs">
                Developed a comprehensive PR strategy for a renewable energy
                company entering the African market, focusing on sustainability.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 md:w-full sm:w-full">
            <img
              src={PRSupportforLuxuryCarAuction}
              alt="PR Support for Luxury Car Auction"
              className="w-full h-48 object-cover md:h-40 sm:h-32"
            />
            <div className="p-4 sm:p-2">
              <h3 className="text-xl font-semibold text-purple-700 md:text-lg sm:text-base">
                PR Support for Luxury Car Auction
              </h3>
              <p className="text-gray-600 text-sm md:text-xs sm:text-xs">
                Provided media coverage and influencer engagement for a
                high-stakes luxury car auction featuring rare models.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 md:w-full sm:w-full">
            <img
              src={AwarenessCampaignforMedicalEquipment}
              alt="Awareness Campaign for Medical Equipment"
              className="w-full h-48 object-cover md:h-40 sm:h-32"
            />
            <div className="p-4 sm:p-2">
              <h3 className="text-xl font-semibold text-purple-700 md:text-lg sm:text-base">
                Awareness Campaign for Medical Equipment
              </h3>
              <p className="text-gray-600 text-sm md:text-xs sm:text-xs">
                Launched a nationwide campaign to promote affordable medical
                equipment rentals, targeting rural healthcare centers.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 md:w-full sm:w-full">
            <img
              src={InfluencerCampaignforTechInnovation}
              alt="Influencer Campaign for Tech Innovation"
              className="w-full h-48 object-cover md:h-40 sm:h-32"
            />
            <div className="p-4 sm:p-2">
              <h3 className="text-xl font-semibold text-purple-700 md:text-lg sm:text-base">
                Influencer Campaign for Tech Innovation
              </h3>
              <p className="text-gray-600 text-sm md:text-xs sm:text-xs">
                Partnered with influencers to promote a tech-driven PR
                initiative, connecting brands with African tech enthusiasts.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 md:w-full sm:w-full">
            <img
              src={ConsultingforLuxuryCarBrandExpansion}
              alt="Consulting for Luxury Car Brand Expansion"
              className="w-full h-48 object-cover md:h-40 sm:h-32"
            />
            <div className="p-4 sm:p-2">
              <h3 className="text-xl font-semibold text-purple-700 md:text-lg sm:text-base">
                Consulting for Luxury Car Brand Expansion
              </h3>
              <p className="text-gray-600 text-sm md:text-xs sm:text-xs">
                Advised a luxury car manufacturer on market entry strategies
                into East Africa, ensuring a seamless launch.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 md:w-full sm:w-full">
            <img
              src={StrategicPlanningforHospitalEquipment}
              alt="Strategic Planning for Hospital Equipment"
              className="w-full h-48 object-cover md:h-40 sm:h-32"
            />
            <div className="p-4 sm:p-2">
              <h3 className="text-xl font-semibold text-purple-700 md:text-lg sm:text-base">
                Strategic Planning for Hospital Equipment
              </h3>
              <p className="text-gray-600 text-sm md:text-xs sm:text-xs">
                Crafted a long-term strategy for a medical equipment supplier to
                penetrate the South African healthcare market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
