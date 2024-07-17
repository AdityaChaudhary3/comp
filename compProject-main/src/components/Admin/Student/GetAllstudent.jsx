import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "../AdminHeader";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

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

const GetAllstudent = () => {
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(false);
  const [id, SetId] = useState();
  const findStudents = async () => {
    try {

        setLoading(true)
      const student = await axios.get(
        "http://localhost:8000/api/admin/get-all-students"
      );

      setLoading(false);
      if (student) {
        console.log(student.data.data);
        setStudents(student.data.data);
        // toast.success("successfuly student data found");
      } else {
        toast.error("data not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Buffer to store the generated Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

    saveAs(blob, "exportedData.xlsx");
  }


  useEffect(() => {
    findStudents();
  }, []);


  return (
    <div>
      <AdminHeader/>
      <div>
        <Button onClick={exportToExcel} 
         style={{ cursor: 'pointer', color: 'blue', fontSize: '16px'}}
        >Excel Export</Button>
      </div>
      <TableContainer >
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
            <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>dob</Th>
              <Th>Adress</Th>
              <Th>gender</Th>
              <Th>Course </Th>
              <Th>Mobile </Th>
              <Th>franchise </Th>
              <Th>city</Th>
              <Th>address</Th>
              <Th>LastQualification</Th>
              <Th>Pincode</Th>
              <Th>Update</Th>

              
            </Tr>
          </Thead>
          <Tbody>
            {!students ? (
              <h1>loading</h1>
            ) : (
              students.map((item) => {
                return (
                  <>
                    <Tr>
                    <Td>{item._id}</Td>
                      <Td>{item.name}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.dob}</Td>
                      <Td>{item.address}</Td>
                      <Td>{item.gender}</Td>
                      <Td>{item.course_details}</Td>
                      <Td>{item.mobile}</Td>
                      <Td>{item.franchise_details}</Td>
                      <Td>{item.city}</Td>
                      <Td>{item.address}</Td>
                      <Td>{item.lastQualification}</Td>
                      <Td>{item.pin}</Td>
                      
                      <Td>
                        <Button >update</Button>
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
      <ToastContainer />
    </div>
  );
};

export default GetAllstudent;
