import React from "react";
import Hero from "../Components/Hero";
import newPostImage from "../assets/NEW POST (1).avif"; // Import the image
import worldImage from "../assets/world.avif"; // Import the background image (kept for potential future use)

const About = () => {
  return (
    <>
      {/* <Hero
        title="About Hnaya International"
        subtitle="Your partner in global African innovation."
      /> */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sector 1: Mission */}
          <div className="text-center mb-12 p-6 rounded-lg">
            <h2
              className="text-4xl font-extrabold text-purple-700 mb-4 
                         lg:text-5xl 
                         md:text-4xl 
                         sm:text-3xl 
                         xs:text-2xl"
            >
              We Are on a Mission to Build the Next Global African Brands
            </h2>
            <p
              className="text-lg text-gray-700 font-bold max-w-2xl mx-auto 
                         lg:text-xl 
                         md:text-lg 
                         sm:text-base 
                         xs:text-sm"
            >
              Helping Africa grow. One brand. One Customer. One Employee at a
              time.
            </p>
          </div>
          <div className="my-8 sm:my-12 lg:my-16" />

          {/* Sector 2: Passion for Brands */}
          <div className="text-center mb-12 p-6 rounded-lg">
            <h2
              className="text-4xl font-extrabold text-teal-800 mb-4 
                         lg:text-5xl 
                         md:text-4xl 
                         sm:text-3xl 
                         xs:text-2xl"
            >
              We Are Passionate About Building Brands with Global Ambitions
            </h2>
            <p
              className="text-xl text-gray-800 font-bold max-w-3xl mx-auto leading-relaxed 
                         lg:text-2xl 
                         md:text-lg 
                         sm:text-base 
                         xs:text-sm"
            >
              For so long African brands have remained firmly in Africa. But we
              believe that it is time for Africa to emerge and grow into the
              global powerhouse that its potential has always promised. And we
              want to be at the summit of that historical transformation,
              helping brands and businesses change lives and create value at the
              highest level, using world-class marketing execution.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              Hnaya International is an award-winning marketing, advertising and
              Public relations agency in Lagos and we have been helping our
              clients grow through our unparalleled marketing services. We work
              shoulder to shoulder with you so that we can build creative and
              strategic solutions to your challenges: from creating digital
              solutions and experiences, developing your brand voice, to
              building relationships at scale with your customers using powerful
              storytelling and tactical media placement.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              Hnaya International offers a comprehensive approach with the speed
              and agility you need to propel your business forward. Our
              research-based strategy means we kick-off our work with you by
              immersing ourselves in your industry, your vision and your
              culture. We take care of your creative needs so that you can focus
              on running your business; we work together in order to help you
              grow.
            </p>
          </div>
          <div className="my-8 sm:my-12 lg:my-16" />

          {/* Sector 3: Footprints */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-orange-700 mb-4 
                         lg:text-5xl 
                         md:text-4xl 
                         sm:text-3xl 
                         xs:text-2xl"
            >
              Our Footprints Stretch Across 5 Continents
            </h2>
            <img
              src={newPostImage}
              alt="Global Footprints"
              className="mx-auto mb-4 w-full max-w-[600px] h-auto rounded-lg 
                         lg:max-w-[800px] 
                         md:max-w-[500px] 
                         sm:max-w-[400px] 
                         xs:max-w-[300px]"
            />
            <p
              className="text-xl text-gray-700 font-bold max-w-2xl mx-auto 
                         lg:text-2xl 
                         md:text-lg 
                         sm:text-base 
                         xs:text-sm"
            >
              From manufacturing to retail, cloud computing, telecommunications,
              technology and Not-for-profit organizations, we have helped new
              and established brands achieve their strategic business objectives
              in their home countries or on the continent. We have helped
              clients from Beijing, Utrecht, Sydney, the United Kingdom, Mexico
              to the United States, demonstrating our capabilities and reach.
            </p>
          </div>
          <div className="my-8 sm:my-12 lg:my-16" />

          {/* Sector 4: Get in Touch */}
          <div className="text-center bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg shadow-lg">
            <h2
              className="text-3xl font-extrabold text-indigo-800 mb-4 
                         lg:text-4xl 
                         md:text-3xl 
                         sm:text-2xl 
                         xs:text-xl"
            >
              Get in Touch
            </h2>
            <p
              className="text-xl text-gray-800 font-bold max-w-xl mx-auto mb-4 
                         lg:text-2xl 
                         md:text-lg 
                         sm:text-base 
                         xs:text-sm"
            >
              Start your project or just speak with us to learn more about our
              company. If there's anything we enjoy as much as helping brands
              win it is talking about our company, our people, our work and our
              mission to build the next global brands.
            </p>
            <p
              className="text-md text-gray-700 
                         lg:text-lg 
                         md:text-base 
                         sm:text-sm 
                         xs:text-xs"
            >
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@hnaya.it.com"
                className="text-blue-500 hover:underline"
              >
                info@hnaya.it.com
              </a>
            </p>
            <p
              className="text-md text-gray-700 
                         lg:text-lg 
                         md:text-base 
                         sm:text-sm 
                         xs:text-xs"
            >
              <strong>Tel:</strong>{" "}
              <a
                href="tel:+2348188800000"
                className="text-blue-500 hover:underline"
              >
                +2348188800000
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
