import React from "react";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  const whatsappNumber = "+2341234567890"; // Replace with yours

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-deep-purple text-center mb-8">
            Contact Us
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ContactForm />
            </div>
            <div className="space-y-4">
              <p>
                <strong>Office:</strong> Periwinkle Lifestyle Estate, Freedom
                Road, Lekki Phase 1, Lagos.
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@hnaya.it.com" className="text-sky-blue">
                  info@hnaya.it.com
                </a>
              </p>
              <p>
                <strong>Phone/WhatsApp:</strong>{" "}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  className="text-sky-blue"
                >
                  +2341234567890
                </a>
              </p>
              <div className="flex space-x-4">
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
