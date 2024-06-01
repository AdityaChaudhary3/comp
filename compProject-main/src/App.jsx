import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import './App.css'
// import MainLinks from './components/MainLinks'
// import CallNow from './components/CallNow'
// import Images from './components/Images'
// import Banner from './components/Banner'
// import Login from './components/Admin/Login'
// import '../public/Images/2.png'
// import ImageSlider from './components/ImageSlider'


import { Routes, Route } from "react-router-dom";
import Registration from './components/studentZone/Registration';
import OnlineApplicaton from './components/franchise/OnlineApplicaton';
import Courses from './components/courses/Courses';
import StudentLogin from './components/studentZone/StudentLogin';
import FranchiseLogin from './components/franchise/FranchiseLogin';
import AboutUs from './components/AboutUs';
import Home from './components/Home'
import Login from './components/Admin/Login';
import AdminHeader from './components/Admin/AdminHeader';
import AdminHomepage from './components/Admin/AdminHomepage';
import AdminRoute from './components/Admin/Routes/AdminRoute';
import GetAllstudent from './components/Admin/Student/GetAllstudent';
import GetAllFranchise from './components/Admin/Franchise/GetAllFranchise';
import GetAllCourses from './components/Admin/Courses/GetAllCourses';
import CreateCourses from './components/Admin/Courses/CreateCourses';
import CourseUpdate from './components/Admin/Courses/CourseUpdate';
import AdminRegister from './components/Admin/AdminRegister';
import GetNewFranchise from './components/Admin/Franchise/GetNewFranchise';
import GetAllMassage from './components/Admin/massage/GetAllMassage';
import GetUnreadMassage from './components/Admin/massage/GetUnreadMassage';
import GetReadMassage from './components/Admin/massage/GetReadMassage';

const app = () => {
  return (
    <>
        {/* <Banner/> */}
        {/* <Header/> */}
        {/* <Images/> */}
        {/* <ImageSlider/> */}
        {/* <MainLinks/> */}
        {/* <CallNow/> */}
        {/* <Footer/> */}


        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<AboutUs />} />
           <Route path="/admin-login" element={<Login />} />

           <Route path="/dashboard" element={<AdminRoute />}>
              <Route path="admin/adminheader" element={<AdminHeader />} />
              <Route path="admin/adminhome" element={<AdminHomepage />} />
              <Route path="admin/student" element={<GetAllstudent />} />
              <Route path="admin/francise" element={<GetAllFranchise />} />
              <Route path="admin/getcourse" element={<GetAllCourses />} />
              <Route path="admin/createCourse" element={<CreateCourses />} />
              <Route path="admin/couUpdate" element={<CourseUpdate />} />
              <Route path="admin/admin-register" element={<AdminRegister />} />
              <Route path="admin/newFranchise" element={<GetNewFranchise />} />
              <Route path="admin/Massage" element={<GetAllMassage />} />
              <Route path="admin/UnreadMassage" element={<GetUnreadMassage />} />
              <Route path="admin/ReadMassage" element={<GetReadMassage />} />
           </Route>
           
           <Route path="/SignUp" element={<Registration />} />
           <Route path="/SignIn" element={<StudentLogin />} />
           <Route path="/franchiseSignUp" element={<OnlineApplicaton />} />
           <Route path="/franchiseLogin" element={<FranchiseLogin />} />
           <Route path="/course" element={<Courses />} />
           <Route path="/couUpdate" element={<CourseUpdate />} />

           
           
           
           
           
           
        </Routes>


    </>
  )
}

export default app
