import React ,{useState} from "react";
import { useAuth } from "../../Context/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Input,
  Button
} from "@chakra-ui/react";

const AdminRegister = () => {
   
    const [name,setName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();


// form function
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/admin/create-admin", {
        email,
        password,
        name,
      });
      if (res ) {
        toast.success("user register succesfully");
        console.log(res);
        navigate( "/admin-login");
      } else {
        // toast.error(res.data.message);
        console.log("error")
      }

      console.log(res.data.admin);
    } catch (error) {
      console.log(error);
    //   toast.error("Something went wrong");
    }
  };


  return (

    <>
    <AdminHeader/>
    <Box w={"100%"} border={"1px solid black"} h={"100vh"} /*bg={'rgb(150,75,0,.4)'}*/>
      <Box m={[5,8,10]}>
        <FormControl
          isRequired
          w={[250, 400, 500]}
          border={"1px solid black"}
          p={["4px", "10px"]}
          margin={"auto"}
          borderRadius={'10'}
          h={'70vh'}
          // bg={'rgb(150,75,0,.2)'}
          // _hover={{ bg: 'pink' }}
          transition={'1s'}
        >

            <Box w={"100%"}>
            <FormLabel>Name</FormLabel>
            <Input type="text" w={"100%"} value={name}
              onChange={(e) => setName(e.target.value)}/>
          </Box>

          <Box w={"100%"}>
            <FormLabel>Email</FormLabel>
            <Input type="email" w={"100%"} value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </Box>

          <Box mb={'7'}>
            <FormLabel>password</FormLabel>
            <Input type="password" w={"100%"} value={password}
              onChange={(e) => setPassword(e.target.value)}/>
              
          </Box >

          <Button onClick={handleSubmit}>Register</Button>
        </FormControl>
      </Box>

      <ToastContainer/>
    </Box>

    </>
  );
};

export default AdminRegister;
