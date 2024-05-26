// Marquee.js
import React from "react";

const Marquee = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        height: "250px",
        textAlign: "center",
      }}
    >
      <marquee scrollamount="2" onMouseOver={e => e.target.stop()} onMouseOut={e => e.target.start()} direction="up">
        <h6>
          NBCESI - National Board of Computer Education Skill India is an ISO 9001:2015 Certified Organization, an Autonomous Institute Registered Under the Indian Trust Act, 1882. "NBCESI PRIVATE LIMITED" is Registered Under the Ministry of Corporate Affairs (Govt. of India)
        </h6>
      </marquee>
    </div>
  );
};

export default Marquee;
