import React from "react";
import ServicesList from "../Components/ServiceList";
// import Gallery from "../Components/Gallery";

// const luxuryItems = [
//   {
//     name: "Mercedes S-Class",
//     price: "250,000",
//     image: "https://via.placeholder.com/400x300?text=Luxury+Car+1",
//     desc: "Premium sedan for sale/rental.",
//   },
//   {
//     name: "BMW X7",
//     price: "180,000",
//     image: "https://via.placeholder.com/400x300?text=Luxury+Car+2",
//     desc: "SUV excellence, available now.",
//   },
//   // Add more
// ];

// const medicalItems = [
//   {
//     name: "MRI Scanner",
//     price: "1,200,000",
//     image: "https://via.placeholder.com/400x300?text=Medical+Equip+1",
//     desc: "Advanced imaging for clinics.",
//   },
//   {
//     name: "Surgical Robot",
//     price: "850,000",
//     image: "https://via.placeholder.com/400x300?text=Medical+Equip+2",
//     desc: "Precision tools for hospitals.",
//   },
//   // Add more
// ];

const Services = () => {
  return (
    <>
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl font-bold text-purple-700 mb-4 
                       lg:text-5xl 
                       md:text-4xl 
                       sm:text-3xl 
                       xs:text-2xl"
          >
            Our Services
          </h1>
          <p
            className="text-xl text-gray-600 
                       lg:text-2xl 
                       md:text-lg 
                       sm:text-base 
                       xs:text-sm"
          >
            Comprehensive solutions tailored for your success.
          </p>
        </div>
      </section>
      <ServicesList />
      {/* Uncomment below if you want to include Gallery sections */}
      {/* 
      <Gallery
        title="Luxury Cars Showcase"
        items={luxuryItems}
        className="py-12 sm:py-16 bg-gray-100"
      />
      <Gallery
        title="Medical Sector Showcase"
        items={medicalItems}
        className="py-12 sm:py-16 bg-white"
      />
      */}
    </>
  );
};

export default Services;
