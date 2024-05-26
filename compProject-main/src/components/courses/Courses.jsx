import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/Courses.css";
const Courses = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="imgge"></div>
        <div className="bg-text">
          <h1>COURSES</h1>
        </div>
      </div>

      <div className="coursesContainer">
        <div className="content">
          <div className="para"><p>COURSES</p></div>
          <div>
            <div>
              <div>
                {/* <label htmlFor="stateSelect"> Distict:</label> */}
                <br />
                <select id="DistrictSelect" name="state">
                  <option value="">Select Catagory</option>
                  <option value="14">Computer Course</option>
                  <option value="18">Vocational Course</option>
                  <option value="19">School Course</option>
                  <option value="20">Smart Course</option>
                  <option value="21">Accounting Course</option>
                  <option value="22">Hardware &amp; Networking</option>
                  <option value="23">Spoken English</option>
                  <option value="24">Typewriting Course</option>
                  <option value="25">Course For Karnataka State</option>
                  <option value="26">Course For Jharkhand State</option>
                  <option value="27">Programming &amp; Web Designing</option>
                  {/* Add more state options as needed */}
                </select>
              </div>
            </div>
            <div>
              <div>
                {/* <label htmlFor="stateSelect"> Distict:</label> */}
                <br />
                <select id="DistrictSelect" name="state">
                  <option value="">Select Duration</option>
                  <option value="3 month">3 Month</option>
                  <option value="6 month">6 Month</option>
                  <option value="1 year">1 Year</option>
                  <option value="18 month">18 Month</option>
                  <option value="2 year">2 Year</option>
                  <option value="3 year">3 Year</option>
                  {/* Add more state options as needed */}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
