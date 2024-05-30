// src/Form.js
import React, { useState } from "react";
import "../../styles/studentZone/SignUp.css";
import Header from "../Header";
import Footer from "../Footer";
import { useForm } from "react-hook-form";
import axios from "axios";


function OnlineApplicaton() {
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  // const onSubmit = async(data) => {
  //   console.log(data,"franchise data")
  //   await axios.post("http://localhost:8000/api/franchise/franchise-register", data)
  
  // };



  const onSubmit = async(data) => {
    console.log(data,"franchise data")
    const data1 = new FormData();
    data1.append("state", data.state);
    data1.append("district", data.district);
    data1.append("town", data.town);
    data1.append("nameOfInstitute", data.nameOfInstitute);
    data1.append("pin", data.pin);
    data1.append("postalAdressOfInstitute", data.postalAdressOfInstitute);
    data1.append("mobileInstitute", data.mobileInstitute);
    data1.append("emailIdOfInstitute", data.emailIdOfInstitute);
    data1.append("nameOfCentralHead", data.nameOfCentralHead);
    data1.append("position", data.position);
    data1.append("mobileHead", data.mobileHead);
    data1.append("emailHead", data.emailHead);
    data1.append("dateofBirth", data.dateofBirth);
    data1.append("addressofHead", data.addressofHead);
    data1.append("gender", data.gender);
    data1.append("password", data.password);
    data1.append("photo", data.photo[0]);
    data1.append("id_proof", data.id_proof[0]);
    data1.append("photoOfInstitute", data.photoOfInstitute[0]);
    data1.append("voterIdOfHead", data.voterIdOfHead[0]);
    data1.append("panOfHead", data.panOfHead[0]);
    data1.append("tradeLicOfInstitute", data.tradeLicOfInstitute[0]);
    data1.append("photoOfInstituteOffice", data.photoOfInstituteOffice[0]);
    const data2 = await axios.post("http://localhost:8000/api/franchise/franchise-register", data1)
    console.log(data2);
  };

  return (

    <>
    <Header/>


 <div className="main">   
 <div className="imgge"></div>
<div className="bg-text">
  <h1>Franchise Register</h1>
</div>
</div>


    <div className="App">
      <p>Fill up form & send us details for franchise approval :</p>
      <p>(*) Fields are mandatory !</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>APPLICATION FORM FOR AFFILATION</h4>
        <div className="location">
          <div>
            <label htmlFor="stateSelect"> State:</label>
            <br />
            <select id="stateSelect" name="state" {...register("state")}>
              <option value="">Select a state</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
              {/* Add more state options as needed */}
            </select>
          </div>

          <div>
            <div>
              <label htmlFor="stateSelect"> Distict:</label>
              <br />
              <select id="DistrictSelect" name="state" {...register("district")}>
                <option value="">Select a state</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                {/* Add more state options as needed */}
              </select>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="stateSelect">Town:</label>
              <br />
              <select id="DistrictSelect" name="state" {...register("town")}>
                <option value="">Select a state</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                {/* Add more state options as needed */}
              </select>
            </div>
          </div>
        </div>



        <h4>INSTITUTE INFORMATION</h4>
        <div className="location">
          <div>
          <div>
            <label htmlFor="stateSelect">Name of the Institute *</label>
            <br />
            <input
              type="text"
              name=""
              
              id="DistrictSelect"
              placeholder="Enter Name of Institude"
              {...register("nameOfInstitute")}
            />
          </div>
          </div>
           


          <div>
          <div>
            <label htmlFor="stateSelect">Pin*</label>
            <br />
            <input
              type="number"
              name=""
              id="DistrictSelect"
              placeholder="Enter Pin"
              {...register("pin")}
            />
          </div>
          </div>

          <div>
          <div>
            <label htmlFor="stateSelect">Postal Address of the Institute*</label>
            <br />
            <input
              type="text"
              name=""
              id="DistrictSelect"
              placeholder="Postal Address of the Institute*"
              {...register("postalAdressOfInstitute")}
            />
          </div>
          </div>

        
        </div>


          
        <h4>INSTITUTE CONTACT NO.</h4>
        <div className="location">
          <div>
          <div>
            <label htmlFor="stateSelect">Phone1 *</label>
            <br />
            <input
              type="number"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter Name of Institude"
            {...register("mobileInstitute")}
            />
          </div>
          </div>
           


          {/* <div>
          <div>
            <label htmlFor="stateSelect">Phone2 *</label>
            <br />
            <input
              type="number"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter Name of Institude"
            />
          </div>
          </div> */}

          <div>
          <div>
            <label htmlFor="stateSelect">Email ID *</label>
            <br />
            <input
              type="email"
              name=""
              id="DistrictSelect"
              placeholder="Enter Email*"
              {...register("emailIdOfInstitute")}
            />
          </div>
          </div>

        
        </div>



        <h4>INFORMATION ABOUT CENTRE HEAD</h4>
        <div className="Persanal">
          <div>
            <label htmlFor="stateSelect">Name of the Centre Head *</label>
            <br />
            <input
              type="text"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter Name of the Centre Head "
            {...register("nameOfCentralHead")}
            />
          </div>

          <div>
            <label htmlFor="stateSelect">Position Hold of the Centre *</label>
            <br />
            <input
              type="text"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter Position Hold of the Centre"
            {...register("position")}
            />
          </div>

          <div>
            <label htmlFor="stateSelect">Email of the Centre Head*</label>
            <br />
            <input
              type="email"
              name=""
              id="DistrictSelect"
              placeholder="example@gmail.com"
              {...register("emailHead")}
            />
          </div>


          <div>
            <label htmlFor="stateSelect">Date of Birth of the Centre Head*</label>
            <br />
            <input
              type="date"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter Name"
            {...register("dateofBirth")}
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
              {...register("mobileHead")}
            />
          </div>


          <div>
            <label htmlFor="stateSelect">Address*</label>
            <br />
            <input
              type="text"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter Address"
            {...register("addressofHead")}
            />
          </div>


          <div>

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
          </div>


          <div>
            <label htmlFor="stateSelect">Password*</label>
            <br />
            <input
              type="Number"
              name=""
              id="DistrictSelect"
              placeholder="Enter Pincode"
              {...register("password")}
            />
          </div>


          {/* <div>
            <label htmlFor="stateSelect">City*</label>
            <br />
            <input
              type="text"
              name=""
              id="DistrictSelect"
              placeholder="Enter City"
            />
          </div> */}


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


          {/* <div>
            <label htmlFor="stateSelect">Email*</label>
            <br />
            <input
              type="email"
              name=""
              id="DistrictSelect"
              placeholder="Enter Email"
            />
          </div> */}


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


        <h4>DOCUMENTS :</h4>
        <div className="Persanal">
        <div>
            <label htmlFor="stateSelect">Color Passport Size Photo Of The Centre Head*</label>
            <br />
            <input
              type="file"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter City"
            {...register("photoOfInstitute")}
            />
          </div>

          <div>
            <label htmlFor="stateSelect">Voter Card Of The Institute Head*</label>
            <br />
            <input
              type="file"
              name=""
              id="DistrictSelect"
              placeholder="Enter City"
              {...register("voterIdOfHead")}
            />
          </div>


          <div>
            <label htmlFor="stateSelect">Pan Card Of The Institute Head*</label>
            <br />
            <input
              type="file"
              name=""
              id="DistrictSelect"
              placeholder="Enter City"
              {...register("panOfHead")}
            />
          </div>

          <div>
            <label htmlFor="stateSelect">Trade License Of The Institute*</label>
            <br />
            <input
              type="file"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter City"
            {...register("tradeLicOfInstitute")}
            />
          </div>



          <div>
            <label htmlFor="stateSelect">Color Photo Of Office Room*</label>
            <br />
            <input
              type="file"
              name=""
              id="DistrictSelect"
            //   placeholder="Enter City"
            {...register("photoOfInstituteOffice")}
            />
          </div>
        </div>

        <button className="button"> Registration</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default OnlineApplicaton;
