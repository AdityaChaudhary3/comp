// import React from "react";
// import "../styles/MainLinks.css";
// import Marquee from "./Marquee";
// import { Button, ButtonGroup } from '@chakra-ui/react'

// const MainLinks = () => {
//   return (
//     <>
//       <div className="Mcomponents">
//         <div className="NewUpdate">
//           <p className="NewUpdatePara">News & Update</p>
//           <>
//             <p className="NewUpdateContent">
//               {/* NBCESI - National Board of Computer Education Skill India is An
//               ISO 9001:2015 Certified Organization, An Autonomous Institute
//               Registered Under Indian Trust Act, 1882. " NBCESI PRIVATE LIMITED
//               " Registered Under Ministry of Corporate Affairs (Govt. of India) */}
//               <Marquee/>
//             </p>
//           </>
//         </div>

//         <div className="MLinks">
//           <div className="MLinkContainer">
//             <div className="MLinksItem" id="Item1">Online Student Registation</div>
//             <div className="MLinksItem" id="Item2">Frachise Details</div>
//           </div>

//           <div className="MLinkContainer">
//             <div className="MLinksItem" id="Item3">Courses</div>
//             <div className="MLinksItem" id="Item4">Franchise Login</div>
//           </div>
//         </div>

//         <div className="MForms">
//           <div>
//             <p className="NewUpdatePara">Franchise Enquiry</p>
//             <div className="form">
//               <form action="">
//                 <input type="text" placeholder="Enter Business Name"/>
//                 <input type="text" placeholder="Enter prerson Name"/>
//                 <input type="phone" placeholder="Enter Phone Number" />
//                 <input type="email" placeholder="Enter Email"/>
//                 <input type="text" placeholder="Enter Adress"/>
                
                
                
//                 <Button colorScheme='blue'>Button</Button>
             

//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MainLinks;



import React ,{useState} from "react";
import "../styles/MainLinks.css";
import Marquee from "./Marquee";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {useNavigate } from "react-router-dom";
import axios from "axios";

const MainLinks = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    personName: "",
    mobileNumber: "",
    email: "",
    message: "",
  });


  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:8000/api/message/create-message", formData);
      console.log(response);
      setFormData({
        personName: "",
        mobileNumber: "",
        email: "",
        message: "",
      });
      alert("Franchise Enquiry Submitted Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to Submit Franchise Enquiry");
    }
  };


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
            <div onClick={() =>{
              navigate("/SignUp");
            }} className="MLinksItem" id="Item1">Online Student Registation</div>
            <div onClick={() => {
              navigate("/franchiseSignUp");
            }} className="MLinksItem" id="Item2">Frachise Details</div>
          </div>

          <div className="MLinkContainer">
            <div onClick={()=>{
              navigate("/course");
            }} className="MLinksItem" id="Item3">Courses</div>
            <div onClick={() => {
              navigate("/franchiseLogin");
            }} className="MLinksItem" id="Item4">Franchise Login</div>
          </div>
        </div>

        <div className="MForms">
          <div>
            <p className="NewUpdatePara">Franchise Enquiry</p>
            <div className="form">
              <form onSubmit={handleSubmit}>
                <input value={formData.name} 
                onChange={handleChange}
                name="personName"
                type="text" placeholder="Enter prerson Name"/>

                <input value={formData.phone} 
                onChange={handleChange}
                name="mobileNumber"
                type="phone" placeholder="Enter Phone Number" />

                <input value={formData.email} 
                onChange={handleChange}
                name="email"
                type="email" placeholder="Enter Email"/>

                <input value={formData.message} 
                onChange={handleChange}
                name="message"
                type="text" placeholder="Enter Message"/>
                
                <Button type="submit" colorScheme='blue'>Send Message</Button>
             

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLinks;
