import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "../AdminHeader";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

const CourseUpdate = () => {
  const [courseName, setName] = useState();
  const [courseCategory, setCatagory] = useState();
  const [duration, setDuration] = useState();
  const [description, setdescription] = useState();

  const [cName, setcName] = useState();
  const [cCategory, setcCatagory] = useState();
  const [dduration, setdDuration] = useState();


  const handleCatagory = (event) => {
    setCatagory(event.target.value);
  };

  const handleduration = (event) => {
    setDuration(event.target.value);
  };

  
  const handleSubmit = async () => {
    const id = localStorage.getItem("id");

    if (!id) {
      toast.success("loading");
    }

    try {
      const course = await axios.put(
        `http://localhost:8000/api/course/update-course/${id}`,
        {
          courseName,
          courseCategory,
          duration,
          description
        }
      );

      if (course) {
        toast.success("course created succesfully");
        console.log(course);
      }
    } catch (error) {
      toast.error(error);
    }
  };

//   useEffect(() => {
//     handleSubmit();
//   });

  return (
    <>
      <AdminHeader />
      <Box>
        <FormControl
          w={[250, 400]}
          border={"1px solid black"}
          m={"auto"}
          p={["1", "10"]}
          mt={"10"}
          borderRadius={"10"}
        >
          <FormLabel>Course Name</FormLabel>
          <Input
            // placeholder={cName?{cName}:"Enter name"}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />


         <FormLabel>Course Name</FormLabel>
          <Input
             type="text"
             value={description}
             placeholder="Enter course Description"
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />

          <FormLabel>Catagory</FormLabel>
          <Select
            onChange={handleCatagory}
            value={
              courseCategory
            } /* placeholder={courseCategory?{courseCategory}:"Select catagory"}*/
          >
            <option value="1">Select Catagory</option>
            <option value="Computer Course">Computer Course</option>
            <option value="Vocational Course">Vocational Course</option>
            <option value="School Course">School Course</option>
            <option value="Smart Course">Smart Course</option>
            <option value="Accounting Course">Accounting Course</option>
            <option value="Hardware">Hardware &amp; Networking</option>
            <option value="Spoken English">Spoken English</option>
            <option value="Typewriting Course">Typewriting Course</option>
            <option value="Course For Karnataka State">
              Course For Karnataka State
            </option>
            <option value="Course For Jharkhand State">
              Course For Jharkhand State
            </option>
            <option value="Programming">Programming &amp; Web Designing</option>
          </Select>

          <FormLabel>duration</FormLabel>
          <Select
            onChange={handleduration}
            value={
              duration
            } /* placeholder={dduration?{dduration}:"Select catagory"}*/
          >
            <option value="1">Select Duration</option>
            <option value="3 month">3 Month</option>
            <option value="6 month">6 Month</option>
            <option value="1 year">1 Year</option>
            <option value="18 month">18 Month</option>
            <option value="2 year">2 Year</option>
            <option value="3 year">3 Year</option>
          </Select>

          <Button colorScheme="teal" size="lg" mt={"5"} onClick={handleSubmit}>
            Button
          </Button>
        </FormControl>
      </Box>

      <ToastContainer />
    </>
  );
};

export default CourseUpdate;
