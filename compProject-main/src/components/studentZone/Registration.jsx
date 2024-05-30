// src/Form.js
import React, { useState, useEffect } from "react";
import "../../styles/studentZone/SignUp.css";
import { useForm } from "react-hook-form";
import Header from "../Header";
import Footer from "../Footer";
import axios from 'axios';

function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [courses, setCourses] = useState([]);
  const [franchises, setFranchises] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:8000/api/course/get-all-courses");
    const fresponse = await axios.get("http://localhost:8000/api/admin/get-all-franchises");
    console.log(response.data); 
    setCourses(response.data.data);
    console.log(fresponse.data);
    setFranchises(fresponse.data.data);
  };

  useEffect( () => {
    getData();
  },[]);

  // const onSubmit = (data) => {
  //   console.log(data,"data student");
  //   axios.post("http://localhost:8000/api/student/student-register", data)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  
  // };





  const onSubmit = async(data) => {
    // console.log(data,"formdata");
    const data1 = new FormData();
    // data1.append("state", data.state);
    // data1.append("district", data.district);
    data1.append("course", data.course);
    data1.append("franchise", data.franchise);
    data1.append("name", data.name);
    data1.append("fatherName", data.fatherName);
    data1.append("email", data.email);
    data1.append("motherName", data.motherName);
    data1.append("lastQualification", data.lastQualification);
    data1.append("dob", data.dob);
    data1.append("mobile", data.mobile);
    data1.append("address", data.address);
    data1.append("gender", data.gender);
    data1.append("pin", data.pin);
    data1.append("city", data.city);
    data1.append("photo", data.photo[0]);
    data1.append("password", data.password);
    data1.append("id_proof", data.id_proof[0]);
    await axios.post("http://localhost:8000/api/student/student-register", data1,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': '/'
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  
  };

  // const [formData, setFormData] = useState({
  //   state: "",
  //   district: "",
  //   courseName: "",
  //   franchiseName: "",
  //   email: "",
  //   dob: "",
  //   parentsNames: "",
  //   mobileNumber: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission (e.g., send data to the server)
  //   console.log("Form submitted:", formData);
  // };
  console.log(courses, "courses");
  console.log(franchises);
  return (
    <>
      <Header />
      <div className="main">
      <div className="imgge"></div>
      <div className="bg-text">
        <h1>Student Register</h1>
      </div>
      </div>

      <div className="App">
        <p>Fill up form & send us details for franchise approval :</p>
        <p>(*) Fields are mandatory !</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>*CHOOSE LOCATION</h4>
          <div className="location">

            <div>
            <div>
              <label htmlFor="stateSelect"> State:</label>
              <br />
              <select id="stateSelect" name="state">
                <option value="">Select a state</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                {/* Add more state options as needed */}
              </select>
            </div>
            </div>

            <div>
              <div>
                <label htmlFor="stateSelect"> Distict:</label>
                <br />
                <select id="DistrictSelect" name="state">
                  <option value="">Select a state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  {/* Add more state options as needed */}
                </select>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="stateSelect"> Study Centre:</label>
                <br />
                <select id="DistrictSelect" name="state" {...register("franchise")}>
                  {/* <option value="">Select a state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option> */}
                  { franchises && franchises.map((franchise) => (
                    <option value={franchise._id}>{franchise.nameOfInstitute}</option>
                  ))}
                  {/* Add more state options as needed */}
                </select>
              </div>
             </div>
          </div>

          <h4>*CHOOSE COURSE</h4>
          <div className="location">
            <div>
              <div>
                <label htmlFor="stateSelect">Course Category:</label>
                <br />
                <select id="stateSelect" name="state">
                  <option value="">Select a state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  {/* Add more state options as needed */}
                </select>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="stateSelect">Duration*</label>
                <br />
                <select id="DistrictSelect" name="state">
                  <option value="">Select a state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  {/* Add more state options as needed */}
                </select>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="stateSelect">Course Name*</label>
                <br />
                <select id="DistrictSelect" name="state" {...register("course")}>
                  {/* <option value="">Select a state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option> */}
                  {courses && courses.map((course) => (
                    <option value={course._id}>{course.courseName}</option>
                  ))}
                  {/* Add more state options as needed */}
                </select>
              </div>
            </div>
          </div>

          <h4>Enter Personal Detaits</h4>
          <div className="Persanal">
            <div>
              <label htmlFor="stateSelect">Name*</label>
              <br />
              <input
                type="text"
                name=""
                id="DistrictSelect"
                placeholder="Enter Name"
                {...register("name")}
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Father's Name*</label>
              <br />
              <input
                type="text"
                name=""
                id="DistrictSelect"
                placeholder="Enter Father Name"
                {...register("fatherName")}
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Email ID</label>
              <br />
              <input
                type="email"
                name=""
                id="DistrictSelect"
                placeholder="Enter Name"
                {...register("email")}
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Mother's Name*</label>
              <br />
              <input
                type="text"
                name=""
                id="DistrictSelect"
                placeholder="Enter Name"
                {...register("motherName")}
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Last General Qualification*</label>
              <br />
              <select id="DistrictSelect" name="state" {...register("lastQualification")}>
                <option value="">Select Qualification</option>
                <option value="CA">Class VIII</option>
                <option value="NY">10th standard</option>
                <option value="NY">12th standard</option>
                <option value="NY">Graduate</option>
                <option value="NY">Post Graduate</option>
                <option value="NY">others</option>
                {/* Add more state options as needed */}
              </select>
            </div>

            <div>
              <label htmlFor="stateSelect">DOB*</label>
              <br />
              <input
                type="date"
                name=""
                id="DistrictSelect"
                placeholder="Enter Name"
                {...register("dob")}
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Phone Number*</label>
              <br />
              <input
                type="Number"
                name=""
                id="DistrictSelect"
                placeholder="Enter Phone Number"
                {...register("mobile")}
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Address**</label>
              <br />
              <input
                type="text"
                name=""
                id="DistrictSelect"
                placeholder="Enter Address"
                {...register("address")}
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Gender*</label>
              <br />
              <select id="DistrictSelect" name="state" {...register("gender")}>
                <option value="">Select Gender</option>
                <option value="CA">Male</option>
                <option value="NY">Female</option>
                <option value="NY">other</option>

                {/* Add more state options as needed */}
              </select>
            </div>

            <div>
              <label htmlFor="stateSelect">Pin Code**</label>
              <br />
              <input
                type="Number"
                name=""
                id="DistrictSelect"
                placeholder="Enter Pincode"
                {...register("pin")}
              />
            </div>

            <div>
              <label htmlFor="stateSelect">City*</label>
              <br />
              <input
                type="text"
                name=""
                id="DistrictSelect"
                placeholder="Enter City"
                {...register("city")}
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Passport Size Color Photo*</label>
              <br />
              <input
                type="file"
                name=""
                id="DistrictSelect"
                placeholder="Enter City"
                {...register("photo")}
              />
            </div>

            <div>
              <label htmlFor="stateSelect">Password*</label>
              <br />
              <input
                type="password"
                name=""
                id="DistrictSelect"
                placeholder="Enter Password"
                {...register("password")}
              />
            </div>

            <div>
              <label htmlFor="stateSelect">ID Proof*</label>
              <br />
              <input
                type="file"
                name=""
                id="DistrictSelect"
                placeholder="Enter City"
                {...register("id_proof")}
              />
            </div>
          </div>

          <button className="button"> Registration</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Registration;
