import React from "react";

const Contact = () => {
  const whatsappNumber = "+2341234567890"; // Replace with yours

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex items-center justify-center min-h-[calc(60vh-64px)]">
          <div className="text-center max-w-md space-y-6">
            <h1 className="text-4xl font-bold text-purple-700 mb-4">
              Contact Us
            </h1>
            <div className="space-y-4 text-left">
              <p>
                Start your project or just speak with us to learn more about our
                company. If there's anything we enjoy as much as helping brands
                win-- it is talking about our company, our people, our process,
                our work and our mission to build the next global brands.
              </p>
              <p>
                <strong>Office:</strong> H3, Xoria Court, Periwinkle Estate,
                Freedom Way, Lekki 1, Lagos, Nigeria
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@hnaya.it.com" className="text-blue-300">
                  info@hnaya.it.com
                </a>
              </p>
              <p>
                <strong>Phone/WhatsApp:</strong>{" "}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  className="text-blue-300"
                >
                  +2341234567890
                </a>
              </p>
              <div className="flex justify-center space-x-4">
                {/* Social icons as in Footer */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
