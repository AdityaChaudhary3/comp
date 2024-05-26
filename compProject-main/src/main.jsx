import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Registration from './components/studentZone/Registration.jsx'
import OnlineApplicaton from './components/franchise/OnlineApplicaton.jsx'
import Courses from './components/courses/Courses.jsx'
import StudentLogin from './components/studentZone/StudentLogin.jsx'
import FranchiseLogin from './components/franchise/FranchiseLogin.jsx'
// import AboutUs from './components/AboutUs.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
 
  {
    path:"/about",
    element:<AboutUs/>
  },

  {
    path:"/SignUp",
    element:<Registration/>
  },

  {
    path:"/SignIn",
    element:<StudentLogin/>
  },

  {
    path:"/franchiseSignUp",
    element:<OnlineApplicaton/>
  },

  {
    path:"/franchiseLogin",
    element:<FranchiseLogin/>
  },

  {
    path:"/course",
    element:<Courses/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
