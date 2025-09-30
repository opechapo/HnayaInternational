import React from "react";
import ServicesList from "../components/ServiceList";
import Gallery from "../components/Gallery";

const luxuryItems = [
  {
    name: "Mercedes S-Class",
    price: "250,000",
    image: "https://via.placeholder.com/400x300?text=Luxury+Car+1",
    desc: "Premium sedan for sale/rental.",
  },
  {
    name: "BMW X7",
    price: "180,000",
    image: "https://via.placeholder.com/400x300?text=Luxury+Car+2",
    desc: "SUV excellence, available now.",
  },
  // Add more
];

const medicalItems = [
  {
    name: "MRI Scanner",
    price: "1,200,000",
    image: "https://via.placeholder.com/400x300?text=Medical+Equip+1",
    desc: "Advanced imaging for clinics.",
  },
  {
    name: "Surgical Robot",
    price: "850,000",
    image: "https://via.placeholder.com/400x300?text=Medical+Equip+2",
    desc: "Precision tools for hospitals.",
  },
  // Add more
];

const Services = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-deep-purple mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive solutions tailored for your success.
          </p>
        </div>
      </section>
      <ServicesList />
      <Gallery title="Luxury Cars Showcase" items={luxuryItems} />
      <Gallery title="Medical Sector Showcase" items={medicalItems} />
    </>
  );
};

export default Services;
