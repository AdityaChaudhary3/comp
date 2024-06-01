
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

const GetUnreadMassage = () => {
     
    const [massage, setMassage] = useState();
    const [loading, setLoading] = useState(false);
    const [id, SetId] = useState();
    const [varified,setverified] = useState();
    
     
    const findMassage = async () => {
        try {
    
            setLoading(true)
          const franchise = await axios.get(
            "http://localhost:8000/api/message/get-unread-messages"
          );
    
          setLoading(false);
          if (franchise) {
            console.log(franchise.data.data );
            
            setMassage(franchise.data.data);
            // console.log(franchise[0],"khkh");
            // toast.success("successfuly frachise data found");
          } else {
            toast.error("data not found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    

      const update = async(id)=>{
         try {
               const massage = await axios.put(`http://localhost:8000/api/message/mark-as-read/${id}`)
               if(massage){
                toast.success('massage updated succesfully');
                findMassage();
               }
               else{
                toast.error("massage not updated");
    
               }
         } catch (error) {
            
         }
      }
      useEffect(() => {
        findMassage();
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
              <Th>update</Th>


              
            </Tr>
          </Thead>
          <Tbody>
            {!massage ? (
              <h1>loading</h1>
            ) : (
                massage.map((item) => {
                return (
                  <>
                    <Tr>
                      <Td>{item._id}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.message}</Td>
                      <Td>{item.mobileNumber}</Td>
                      <Td>{item.personName}</Td>
                      <Td>{item.isRead ? 'read' : 'not read'}</Td>
                      <Th>
                      <Button colorScheme='orange' onClick={()=>{update(`${item._id}`)}}>mark read</Button>
                      </Th>

                      
                     
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

export default GetUnreadMassage
