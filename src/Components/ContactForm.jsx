import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "Marketing",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit (e.g., emailjs or API)
    alert("Message sent! Well reply soon.");
    window.location.href = `mailto:info@hnaya.it.com?subject=Inquiry from ${formData.name}&body=${formData.message}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-deep-purple mb-4">Get in Touch</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <select
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        className="w-full p-2 mb-4 border rounded"
      >
        <option>Marketing & PR</option>
        <option>Luxury Cars</option>
        <option>Medical Equipment</option>
      </select>
      <textarea
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full p-2 mb-4 border rounded h-32"
        required
      />
      <button
        type="submit"
        className="w-full bg-sky-blue text-white p-2 rounded hover:bg-fresh-green transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
