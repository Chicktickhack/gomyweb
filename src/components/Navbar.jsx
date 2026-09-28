import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="brand"></a>

      <div className="nav-links">
        <a href="#services">Services</a>

        <a href="#process">
          How It Works
        </a>

        <a href="#about">
          About
        </a>

        <a href="https://wa.me/6289529508111" className="nav-cta">
          Let’s Talk
        </a>
      </div>
    </nav>
  );
}