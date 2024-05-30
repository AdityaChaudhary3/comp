import React from 'react'
import AdminHeader from './AdminHeader'
import { Box, Text ,Flex,Center} from "@chakra-ui/react";
import img from  '../../../public/Images/image.png'
import Footer from '../Footer'

const AdminHomepage = () => {
  return (
    <div>
         <AdminHeader/>
         
        <Flex  bg={'rgb(51,255,51,.3)'} h={'100vh'} p={['2','20']} justifyContent={'space-between'} flexWrap={'wrap'}>

         <Flex mr={['2','10']} display={'flex'} flexWrap={'wrap'} w={['300px','300px','500px']}   >

          
         <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "34px", md: "40px", lg: "70px" }}
          fontWeight="extrabold"
          
        >
          welcome to admin Homepage
        </Text>

        </Flex>
         

         <Box>
             <img src={img} alt="" width={['550px','400px','300px']}/>
         </Box>
        </Flex>
        <Footer/>
    </div>
  )
}

export default AdminHomepage
