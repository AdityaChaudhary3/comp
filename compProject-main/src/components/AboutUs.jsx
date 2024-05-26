import React from "react";
import img4 from "../../public/Images/4.jpg";
import "../styles/AboutUs.css";
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <Header />

      <div className="main">
        <div className="imgge"></div>

        <div className="bg-text">
          <h1>ABOUT US</h1>
        </div>
      </div>

      <div className="AboutContent">
        <div>
          <img src={img4} alt="" className="img4" />
        </div>
        <div>
          <p>
            NBCESI – “National Board of Computer Education Skill India” is a Top
            Computer Training, Vocational & Technical Education Institute in all
            over India, which is a National Programme of Information Technology
            Education and Development. “National Board of Computer Education
            Skill India” (NBCESI) an ISO 9001:2015 Certified Organization, An
            Autonomous Institute Registered Under The Indian Trust Act,
            1882.(Reg No-IV- 00466/2019), Govt. of India, and also Registered
            Empanelled under NPS - Planning Commission , Govt. of India &
            Registered Under Trade Mark Registry Act,1999 & "NBCESI PRIVATE
            LIMITED" Registered Under Ministry of Corporate Affairs (Govt. of
            India) NBCESI – “National Board of Computer Education Skill India”
            is committed to customer satisfaction. We have created a very
            friendly learning environment with the latest computer hardware and
            software technologies. Whether you are new to the computer industry
            or are looking to improve your skills, we have the right course for
            you. Well- Qualified, experienced certified instructors train the
            participants with easy-to-use step by step training material in the
            most optimized period of time. Our trainers constantly update their
            technical skills to maintain their expertise.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
