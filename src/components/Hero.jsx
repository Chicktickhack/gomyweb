import React from "react";
import GwVideo from "../assets/videos/Gw.mp4";

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src={GwVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      <div className="hero-overlay"></div>

      <div className="hero-button-wrap">
        <a href="#services" className="hero-button">
          Explore
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}