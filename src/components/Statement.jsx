import React from "react";
import Hands from "../assets/hands.png";

export default function Statement() {
  return (
    <section className="statement-section">
      <div className="statement-inner">

        <div className="statement-visual">

          {/* Soft depth / light effect */}
          <div className="statement-glow"></div>

          <h2 className="statement-title">
            <span className="statement-line statement-line-1">
              From an idea
            </span>

            <span className="statement-line statement-line-2">
              to something real.
            </span>
          </h2>

          <img
            src={Hands}
            alt=""
            className="statement-hands"
            draggable="false"
          />

        </div>

      </div>
    </section>
  );
}