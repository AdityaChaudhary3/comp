import React,{useState,useEffect} from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from '../AdminHeader';
import { useNavigate } from 'react-router-dom';

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Box,
    Flex,
  } from "@chakra-ui/react";
  import { wrap } from "framer-motion";

const GetAllCourses = () => {

    const [franchise, setFranchise] = useState();
    const [loading, setLoading] = useState(false);
    const [id, SetId] = useState();

   const navigate = useNavigate();
    const findCourse = async () => {
        try {
    
            setLoading(true)
          const franchise = await axios.get(
            "http://localhost:8000/api/course/get-all-courses"
          );
    
          setLoading(false);
          if (franchise) {
            // console.log(franchise.data.data);
            setFranchise(franchise.data.data);
            // toast.success("successfuly frachise data found");
          } else {
            toast.error("data not found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };


       const handleDelete = async(id)=>{

        const confirmed = window.confirm("Are you sure you want to delete this product?");
        if (!confirmed) {
          return; // If the user cancels, exit the function
        }

                     try {
                          const course = await axios.delete(`http://localhost:8000/api/course/delete-course/${id}`)
                          if(course){
                            console.log(course);
                            toast.success("course delete succesfully")
                            findCourse();
                          }
                          else{
                            toast.error("getting error")
                          }
                     } catch (error) {
                         console.log(error);
                     }
       }

      useEffect(() => {
        findCourse();
      }, []);

      const handleUpdate = (id)=>{
        localStorage.setItem("id", id);
        // console.log(id);
        navigate('/dashboard/admin/couUpdate')
      }


  return (
    <div>
        <AdminHeader/>
         
        <TableContainer >
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>CourseCategory</Th>
              <Th>CourseNam</Th>
              <Th>Duration</Th>
              <Th>Description</Th>
              <Th>Delete</Th>
              <Th>Update</Th>
              

              
            </Tr>
          </Thead>
          <Tbody>
            {!franchise ? (
              <h1>loading</h1>
            ) : (
              franchise.map((item) => {
                return (
                  <>
                    <Tr>
                      <Td>{item._id}</Td>
                      <Td>{item.courseCategory}</Td>
                      <Td>{item.courseName}</Td>

                      <Td>{item.duration}</Td>
                      <Td>{item.description}</Td>
                        
                      <Td>
                      <Button colorScheme='red' onClick={()=>{handleDelete(`${item._id}`)}}>Delete</Button>
                      </Td>
                      
                      <Td>
                        <Button onClick={()=>{handleUpdate(`${item._id}`)}}>update</Button>
                      </Td>
                    </Tr>
                  </>
                );
              })
            )}
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
        <ToastContainer/>
    </div>
  )
}

export default GetAllCourses
