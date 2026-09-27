import React from "react";
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        
      </div>

      <div className="footer-services">
        Web Development · Mobile App · AI Integration
      </div>

      <div className="footer-copy">
        © {new Date().getFullYear()} GO MY WEB
      </div>

    </footer>
  );
}