
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "../AdminHeader";

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

const GetAllMassage = () => {
     
    const [franchise, setFranchise] = useState();
    const [loading, setLoading] = useState(false);
    const [id, SetId] = useState();
    const [varified,setverified] = useState();
    
     
    const findfranchise = async () => {
        try {
    
            setLoading(true)
          const franchise = await axios.get(
            "http://localhost:8000/api/message/get-all-messages"
          );
    
          setLoading(false);
          if (franchise) {
            console.log(franchise.data.data );
            
            setFranchise(franchise.data.data);
            // console.log(franchise[0],"khkh");
            // toast.success("successfuly frachise data found");
          } else {
            toast.error("data not found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      useEffect(() => {
        findfranchise();
        // console.log(franchise[0].isVerified,"khkh");
      }, []);


  return (
    <div>
       <AdminHeader/>
        
       <TableContainer >
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Email</Th>
              <Th>message</Th>
              <Th>mobileNumber</Th>
              <Th>personName</Th>
              <Th>read/not read</Th>


              
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
                      <Td>{item.email}</Td>
                      <Td>{item.message}</Td>
                      <Td>{item.mobileNumber}</Td>
                      <Td>{item.personName}</Td>
                      <Td>{item.isRead ? 'read' : 'not read'}</Td>
                      
                     
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
  )
}

export default GetAllMassage
