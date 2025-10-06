import React from "react";
import contactImage from "../assets/contact us.jpg"; // Import the contact image

const Contact = () => {
  const whatsappNumber = "+2341234567890"; // Replace with your WhatsApp number

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center min-h-[calc(60vh-64px)] gap-8">
        {/* Image Section (Left) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={contactImage}
            alt="Contact Us"
            className="w-full max-w-[500px] lg:max-w-[700px] h-auto rounded-lg object-cover 
                       sm:max-w-[300px] 
                       xs:max-w-[250px]"
          />
        </div>

        {/* Content Section (Right) */}
        <div className="w-full md:w-1/2 text-center md:text-left max-w-md space-y-6">
          <h1
            className="text-4xl font-bold text-purple-700 mb-4 
                         lg:text-5xl 
                         md:text-4xl 
                         sm:text-3xl 
                         xs:text-2xl"
          >
            Contact Us
          </h1>
          <div
            className="space-y-4 text-gray-700 text-base 
                          lg:text-lg 
                          md:text-base 
                          sm:text-sm 
                          xs:text-sm"
          >
            <p>
              Start your project or just speak with us to learn more about our
              company. If there's anything we enjoy as much as helping brands
              win.it is talking about our company, our people, our process, our
              work and our mission to build the next global brands.
            </p>
            <p>
              <strong>Office:</strong> H3, Xoria Court, Periwinkle Estate,
              Freedom Way, Lekki 1, Lagos, Nigeria
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@hnaya.it.com"
                className="text-blue-300 hover:underline"
              >
                info@hnaya.it.com
              </a>
            </p>
            <p>
              <strong>Phone/WhatsApp:</strong>{" "}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +2341234567890
              </a>
            </p>
            <div
              className="flex justify-center md:justify-start space-x-4 text-sm 
                            lg:text-base 
                            sm:text-sm 
                            xs:text-xs"
            >
              {/* Social Links (Copied from Footer for consistency) */}
              <a
                href="https://facebook.com/hnaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-500"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/hnaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-500"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/hnaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-500"
              >
                Twitter/X
              </a>
              <a
                href="https://linkedin.com/company/hnaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-500"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
