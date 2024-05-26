import React from "react";
import "../styles/MainLinks.css";
import Marquee from "./Marquee";

const MainLinks = () => {
  return (
    <>
      <div className="Mcomponents">
        <div className="NewUpdate">
          <p className="NewUpdatePara">News & Update</p>
          <>
            <p className="NewUpdateContent">
              {/* NBCESI - National Board of Computer Education Skill India is An
              ISO 9001:2015 Certified Organization, An Autonomous Institute
              Registered Under Indian Trust Act, 1882. " NBCESI PRIVATE LIMITED
              " Registered Under Ministry of Corporate Affairs (Govt. of India) */}
              <Marquee/>
            </p>
          </>
        </div>

        <div className="MLinks">
          <div className="MLinkContainer">
            <div className="MLinksItem" id="Item1">Online Student Registation</div>
            <div className="MLinksItem" id="Item2">Frachise Details</div>
          </div>

          <div className="MLinkContainer">
            <div className="MLinksItem" id="Item3">Courses</div>
            <div className="MLinksItem" id="Item4">Franchise Login</div>
          </div>
        </div>

        <div className="MForms">
          <div>
            <p className="NewUpdatePara">Franchise Enquiry</p>
            <div className="form">
              <form action="">
                <input type="text" placeholder="Enter Business Name"/>
                <input type="text" placeholder="Enter prerson Name"/>
                <input type="phone" placeholder="Enter Phone Number" />
                <input type="email" placeholder="Enter Email"/>
                <input type="text" placeholder="Enter Adress"/>
                <div className="button1">
                <button className="button">Send Now</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLinks;
