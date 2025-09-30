import React from "react";
import { FaBullhorn, FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa"; // npm install react-icons

const services = [
  {
    icon: FaBullhorn,
    title: "Brand Strategy",
    desc: "Crafting compelling brand narratives for global African impact.",
  },
  {
    icon: FaChartLine,
    title: "Digital Marketing",
    desc: "Data-driven campaigns across social and search platforms.",
  },
  {
    icon: FaUsers,
    title: "PR & Media Relations",
    desc: "Securing coverage in top outlets like BBC and Reuters.",
  },
  {
    icon: FaLightbulb,
    title: "Event Management",
    desc: "High-profile events connecting brands with influencers.",
  },
];

const ServicesList = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-deep-purple text-center mb-8">
          Marketing & PR Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
            >
              <service.icon className="text-fresh-green text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-deep-purple mb-2">
                {service.title}
              </h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
