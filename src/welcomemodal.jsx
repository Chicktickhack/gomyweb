import React, { useState } from "react";
import Logo from "./assets/logo/logo.png";

export default function WelcomeModalServices({ isOpen, onClose }) {
  const [isShaking, setIsShaking] = useState(false);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsShaking(true);

      setTimeout(() => {
        setIsShaking(false);
      }, 450);
    }
  };

  return (
    <div
      className="gmw-services-overlay"
      onMouseDown={handleOverlayClick}
    >
      <div
        className={`gmw-services-modal ${
          isShaking ? "gmw-services-shake" : ""
        }`}
      >
        <div className="gmw-services-content">

          {/* LOGO */}
          <div className="gmw-services-logo">
            <img
              src={Logo}
              alt="GO MY WEB"
              className="gmw-services-main-logo"
            />
          </div>

          {/* CONTENT */}
          <div className="gmw-services-text">
            <h2>
              Akselerasi Bisnis dengan
              <br />
              Teknologi Modern.
            </h2>

            <p className="gmw-services-description">
              Bangun bisnis yang lebih profesional, efisien,
              dan siap berkembang dengan solusi teknologi
              yang dirancang sesuai kebutuhan.
            </p>

            <div className="gmw-services-points">
              <div className="gmw-services-point">
                <span>✓</span>
                Website Profesional
              </div>

              <div className="gmw-services-point">
                <span>✓</span>
                Mobile & AI
              </div>

              <div className="gmw-services-point">
                <span>✓</span>
                Sistem Terintegrasi
              </div>

              <div className="gmw-services-point">
                <span>✓</span>
                Timeless Design
              </div>

              <div className="gmw-services-point">
                <span>✓</span>
                User Friendly
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="gmw-services-footer">
          <div className="gmw-services-footer-info">
            Solusi digital untuk membantu bisnis berkembang.
          </div>

          <button
            className="gmw-services-btn"
            onClick={onClose}
          >
            Masuk ke Halaman
            <span>→</span>
          </button>
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .gmw-services-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 24px;

          background: rgba(4, 7, 14, 0.78);

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          overflow-y: auto;
        }

        .gmw-services-modal {
          position: relative;

          width: min(920px, 100%);
          max-height: calc(100vh - 48px);

          padding: 42px 48px 24px;

          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;

          background:
            radial-gradient(
              circle at 85% 10%,
              rgba(65, 110, 255, 0.10),
              transparent 32%
            ),
            #090d16;

          color: #fff;

          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .gmw-services-content {
          display: grid;

          grid-template-columns:
            minmax(260px, 0.82fr)
            minmax(0, 1.18fr);

          gap: 42px;

          min-height: 295px;

          align-items: center;
        }

        /* LOGO */

        .gmw-services-logo {
          height: 295px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 8px;
        }

        .gmw-services-main-logo {
          display: block;

          width: min(285px, 100%);
          max-height: 255px;

          height: auto;

          object-fit: contain;
        }

        /* TEXT */

        .gmw-services-text {
          min-width: 0;
        }

        .gmw-services-text h2 {
          margin: 0 0 15px;

          font-size: clamp(30px, 3.2vw, 42px);

          line-height: 1.08;

          letter-spacing: -1.6px;

          font-weight: 750;
        }

        .gmw-services-description {
          max-width: 530px;

          margin: 0;

          color: rgba(255, 255, 255, 0.62);

          font-size: 14px;

          line-height: 1.7;
        }

        /* POINTS */

        .gmw-services-points {
          display: flex;

          flex-wrap: wrap;

          gap: 8px;

          margin-top: 20px;

          max-width: 560px;
        }

        .gmw-services-point {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          width: fit-content;

          padding: 7px 11px;

          border: 1px solid rgba(255, 255, 255, 0.09);

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.045);

          color: rgba(255, 255, 255, 0.74);

          font-size: 11px;

          line-height: 1;

          white-space: nowrap;
        }

        .gmw-services-point span {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          width: 15px;
          height: 15px;

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.10);

          color: #fff;

          font-size: 9px;

          font-weight: 700;
        }

        /* FOOTER */

        .gmw-services-footer {
          height: 42px;

          min-height: 42px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          margin-top: 23px;
        }

        .gmw-services-footer-info {
          color: rgba(255, 255, 255, 0.40);

          font-size: 11px;

          line-height: 1.45;
        }

        .gmw-services-btn {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 9px;

          height: 40px;

          padding: 0 16px;

          flex-shrink: 0;

          border: 0;

          border-radius: 11px;

          background: #fff;

          color: #090d16;

          font-size: 12px;

          font-weight: 700;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .gmw-services-btn:hover {
          transform: translateY(-1px);

          box-shadow:
            0 7px 20px rgba(255, 255, 255, 0.10);
        }

        .gmw-services-btn span {
          color: #3277ff;

          font-size: 16px;

          font-weight: 800;
        }

        /* SHAKE */

        .gmw-services-shake {
          animation: gmwServicesShake 0.45s ease;
        }

        @keyframes gmwServicesShake {
          0%,
          100% {
            transform: translateX(0);
          }

          20% {
            transform: translateX(-5px);
          }

          40% {
            transform: translateX(5px);
          }

          60% {
            transform: translateX(-4px);
          }

          80% {
            transform: translateX(3px);
          }
        }

        /* MOBILE */

        @media (max-width: 700px) {
          .gmw-services-overlay {
            align-items: flex-start;

            padding: 12px;

            overflow-y: auto;

            scrollbar-width: thin;

            scrollbar-color:
              rgba(255, 255, 255, 0.22)
              transparent;
          }

          .gmw-services-overlay::-webkit-scrollbar {
            width: 4px;
          }

          .gmw-services-overlay::-webkit-scrollbar-track {
            background: transparent;
          }

          .gmw-services-overlay::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.22);

            border-radius: 999px;
          }

          .gmw-services-modal {
            width: 100%;

            max-height: none;

            margin: auto 0;

            padding: 30px 22px 20px;

            border-radius: 22px;
          }

          .gmw-services-content {
            grid-template-columns: 1fr;

            gap: 20px;
          }

          .gmw-services-logo {
            order: -1;

            height: 155px;

            padding: 0;
          }

          .gmw-services-main-logo {
            width: 215px;

            max-height: 150px;
          }

          .gmw-services-text h2 {
            font-size: 29px;

            letter-spacing: -1px;
          }

          .gmw-services-description {
            font-size: 13px;
          }

          .gmw-services-points {
            margin-top: 16px;
          }

          .gmw-services-footer {
            margin-top: 20px;
          }

          .gmw-services-footer-info {
            display: none;
          }

          .gmw-services-btn {
            height: 38px;

            padding: 0 13px;

            font-size: 11px;
          }
        }

        @media (max-width: 420px) {
          .gmw-services-modal {
            padding-left: 17px;
            padding-right: 17px;
          }

          .gmw-services-text h2 {
            font-size: 26px;
          }

          .gmw-services-point {
            font-size: 10px;

            padding: 6px 9px;
          }

          .gmw-services-main-logo {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
}

