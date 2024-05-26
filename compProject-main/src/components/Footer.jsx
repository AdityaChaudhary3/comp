import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="components">
        <div className="items">
          <h1>Contact Us</h1>

          <div>
            <p>
              National Board of Computer Education Skill India Raiganj, Uttar
              Dinajpur,West Bengal, India, Pin-733134
            </p>
            <p>officenbcesi@gmail.com helpdesknbcesi@gmail.com</p>
            <p>+91 90640 29045 </p>
            <p>+91 75840 41887</p>
            <p>+91 75840 41887</p>
            <p>www.nbcesi.in</p>
          </div>
        </div>

        <div className="items1">
          <h1>Quick Links</h1>
           <div className="LinkItems">
             <Link to="#" className="link">
             Centre Login
             </Link>

             <Link to="#" className="link">
             Franchise
             </Link>

             <Link to="#" className="link">
              Verification
             </Link>

             <Link to="#" className="link">
             Contact Us
             </Link>

             <Link to="#" className="link">
             Privacy Policy
             </Link>

             <Link to="#" className="link">
             Refund Policy
             </Link>

             <Link to="#" className="link">
             Terms
             </Link>

             <Link to="#" className="link">
             FAQS
             </Link>
           </div>
        </div>

        <div className="items">
          <h1>Connect with us</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
