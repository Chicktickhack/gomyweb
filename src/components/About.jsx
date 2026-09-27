
import React from "react";
import { aboutImages } from "../data/content";

export default function About() {
  return (
    <section className="intro-section" id="about">
      <div className="section-label">
        KNOW MORE ABOUT GO MY WEB
      </div>

      <div className="intro-content about-visual-content">

        <div className="about-collage">
          {aboutImages.map((image, index) => (
            <div
              className={`about-card about-card-${index + 1}`}
              key={image}
            >
              <img
                src={image}
                alt={`GO MY WEB ${index + 1}`}
                draggable="false"
              />

              <span className="about-card-number">
              </span>
            </div>
          ))}

        </div>

        <div className="intro-text">
          <p>
            GO MY WEB hadir untuk membantu bisnis memanfaatkan
            teknologi tanpa harus membuat semuanya terasa rumit.
          </p>

          <p>
            Dari website hingga aplikasi dan artificial intelligence,
            kami membangun sistem yang dibuat sesuai kebutuhan nyata
            bisnis.
          </p>
        </div>

      </div>
    </section>
  );
}

