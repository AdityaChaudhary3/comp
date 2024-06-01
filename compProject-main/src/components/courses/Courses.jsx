// import React from "react";
// import Header from "../Header";
// import Footer from "../Footer";
// import "../../styles/Courses.css";
// const Courses = () => {
//   return (
//     <div>
//       <Header />
//       <div className="main">
//         <div className="imgge"></div>
//         <div className="bg-text">
//           <h1>COURSES</h1>
//         </div>
//       </div>

//       <div className="coursesContainer">
//         <div className="content">
//           <div className="para"><p>COURSES</p></div>
//           <div>
//             <div>
//               <div>
//                 {/* <label htmlFor="stateSelect"> Distict:</label> */}
//                 <br />
//                 <select id="DistrictSelect" name="state">
//                   <option value="">Select Catagory</option>
//                   <option value="14">Computer Course</option>
//                   <option value="18">Vocational Course</option>
//                   <option value="19">School Course</option>
//                   <option value="20">Smart Course</option>
//                   <option value="21">Accounting Course</option>
//                   <option value="22">Hardware &amp; Networking</option>
//                   <option value="23">Spoken English</option>
//                   <option value="24">Typewriting Course</option>
//                   <option value="25">Course For Karnataka State</option>
//                   <option value="26">Course For Jharkhand State</option>
//                   <option value="27">Programming &amp; Web Designing</option>
//                   {/* Add more state options as needed */}
//                 </select>
//               </div>
//             </div>
//             <div>
//               <div>
//                 {/* <label htmlFor="stateSelect"> Distict:</label> */}
//                 <br />
//                 <select id="DistrictSelect" name="state">
//                   <option value="">Select Duration</option>
//                   <option value="3 month">3 Month</option>
//                   <option value="6 month">6 Month</option>
//                   <option value="1 year">1 Year</option>
//                   <option value="18 month">18 Month</option>
//                   <option value="2 year">2 Year</option>
//                   <option value="3 year">3 Year</option>
//                   {/* Add more state options as needed */}
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Courses;

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/Courses.css";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [catagory, setCatagory] = useState("");
  const [duration, setDuration] = useState("");

  const handleCatagoryChange = (e) => {
    setCatagory(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(catagory, duration);
    const response = await axios
      .get(
        `http://localhost:8000/api/course/get-all-courses?category=${catagory}&duration=${duration}`
      )
      .then((response) => {
        console.log(response.data);
        setCourses(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <div className="para">
            <p>COURSES</p>
          </div>
          <div>
            <div>
              <div>
                {/* <label htmlFor="stateSelect"> Distict:</label> */}
                <br />
                <select
                  id="DistrictSelect"
                  name="state"
                  value={catagory}
                  onChange={handleCatagoryChange}
                >
                  <option value="">Select Catagory</option>
                  <option value="Computer Course">Computer Course</option>
                  <option value="Vocational Course">Vocational Course</option>
                  <option value="School Course">School Course</option>
                  <option value="Smart Course">Smart Course</option>
                  <option value="Accounting Course">Accounting Course</option>
                  <option value="Hardware & Networking">
                    Hardware &amp; Networking
                  </option>
                  <option value="Spoken English">Spoken English</option>
                  <option value="Typewriting Course">Typewriting Course</option>
                  <option value="Course For Karnataka State">
                    Course For Karnataka State
                  </option>
                  <option value="Course For Jharkhand State">
                    Course For Jharkhand State
                  </option>
                  <option value="Programming & Web Designing">
                    Programming &amp; Web Designing
                  </option>
                  {/* Add more state options as needed */}
                </select>
              </div>
            </div>
            <div>
              <div>
                {/* <label htmlFor="stateSelect"> Distict:</label> */}
                <br />
                <select
                  id="DistrictSelect"
                  name="state"
                  value={duration}
                  onChange={handleDurationChange}
                >
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
              <div>
                <button className="button" onClick={handleSubmit}>
                  {" "}
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="coursesContainer">
        <div className="content">
          <div className="para">
            <p>Available Courses</p>
          </div>
          <div className="courses">
            {courses.map((course) => (
              <>
                <div className="course" key={course._id}>
                  {/* <div className="courseName">{course.courseName}</div>
                  <div className="courseDuration">{course.duration}</div>
                  <div className="courseCategory">{course.description}</div> */}
                  {/* <div className="courseDescription">{course.description}</div> */}
                </div>

                <Card align="center" border={'1px solid black'} w={'280px'} className="card" >
                  <CardHeader>
                    <Heading size="md"> <div className="courseName">{course.courseName}</div></Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>
                    <div className="courseDuration">{course.duration}</div>
                    </Text>

                    <Text>
                    <div className="courseCategory">{course.description}</div>
                    </Text>
                  </CardBody>
                  <CardFooter>
                    {/* <Button colorScheme="blue">View here</Button> */}
                  </CardFooter>
                </Card>
              </>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
