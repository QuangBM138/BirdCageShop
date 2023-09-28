import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer bg-dark section-p" id="footer">
      <div className="section-title">
        <img
          className="imgFooter"
          src="//dt-pet-care.myshopify.com/cdn/shop/files/footer-logo_x100@2x.png?v=1613528262"
        />
        {/* <h3 className="text">
            Bird Cage
          </h3> */}
      </div>
      <div className="footer-content">
        <ul className="footer-social-links flex flex-c list">
          <li>
            <a href="/" className="text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="/" className="text-white">
              Terms & Condition
            </a>
          </li>
          <li>
            <a href="/" className="text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="text-white">
              Press Release
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
