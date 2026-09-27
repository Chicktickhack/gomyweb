import React from "react";
import { services } from "../data/content";

export default function Services() {
  return (
    <section className="services-section" id="services">

      <div className="section-heading services-heading">

        <div className="section-label"></div>

        <div className="services-heading-content">
          <h2></h2>

          <p className="services-intro">
            Solusi digital untuk berbagai kebutuhan bisnis,
            dari website hingga aplikasi dan AI.
          </p>
        </div>

      </div>


      <div className="services-catalog">

        {services.map((service) => (
          <article
            className="package-product"
            key={service.number}
          >

            <div className="product-top">
              <span className="product-number">
                {service.number}
              </span>

              <span className="product-category">
                {service.category}
              </span>
            </div>


            <div className="product-content">

              <span className="product-label">
                {service.label}
              </span>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.shortDescription}
              </p>

            </div>


            <div className="product-bottom">

              <div className="product-price">
                <span>
                  HARGA
                </span>

                <strong>
                  {service.price}
                </strong>
              </div>

              <a
                href="https://wa.me/6289529508111"
                target="_blank"
                rel="noreferrer"
                className="product-button"
              >
                Konsultan
                <span></span>
              </a>

            </div>

          </article>
        ))}

      </div>



    </section>
  );
}