import React ,{useState} from "react";
import { useAuth } from "../../Context/auth";
import axios from "axios";
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

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();


// form function
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/admin/login-admin", {
        email,
        password,
      });
      if (res ) {
        // toast.success(res.data && res.data.message);
        console.log(res);
        setAuth({
          ...auth,
          user: res.data.admin,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate( "/dashboard/admin/adminhome");
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
    <Box w={"100%"} border={"1px solid black"} h={"100vh"} >
      <Box m={[5,8,10]}>
        <FormControl
          isRequired
          w={['100%', 400, 500]}
          border={"1px solid black"}
          p={["4px", "10px"]}
          margin={"auto"}
          borderRadius={'10'}
          h={['60vh']}
          // bg={'rgb(150,75,0,.2)'}
          // _hover={{ bg: 'pink' }}
          transition={'1s'}
        >
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

          <Button onClick={handleSubmit}>Login</Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
