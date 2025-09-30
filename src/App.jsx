import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services"; // Corrected from "./pages/Service"
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
