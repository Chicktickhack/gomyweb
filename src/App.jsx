import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Statement from "./components/Statement";
import Footer from "./components/Footer";

import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/services.css";
import "./styles/statement.css";

import "./styles/footer.css";

export default function App() {
  return (
    <div className="gmw-site">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Statement />
      </main>

      <Footer />
    </div>
  );
}