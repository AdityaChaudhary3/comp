import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth";
const AdminHeader = () => {

  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    // toast.success("Logout Successfully");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid" id="background">
          {/* <Link class="navbar-brand" to="#">
            Navbar
          </Link> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  HOME
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/dashboard/admin/student">
                  students
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/dashboard/admin/admin-register">
                  Register
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/admin-login">
                  Login
                </Link>
              </li>



              <li class="nav-item dropdown ">
                <Link
                  class="nav-link dropdown-toggle active"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  course
                </Link>
                <ul class="dropdown-menu" /*style={{backgroundColor:'cyan'}}*/ >
                  <li>
                    <Link class="dropdown-item " to="/dashboard/admin/getcourse">
                    get-all-courses
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/dashboard/admin/createCourse">
                     create-courses
                    </Link>
                  </li>

                </ul>
              </li>



              <li class="nav-item dropdown ">
                <Link
                  class="nav-link dropdown-toggle active"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  franchise
                </Link>
                <ul class="dropdown-menu" /*style={{backgroundColor:'cyan'}}*/ >
                  <li>
                    <Link class="dropdown-item " to="/dashboard/admin/francise">
                    get-all-franchises
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/dashboard/admin/newFranchise">
                    get-new-franchise-requests
                    </Link>
                  </li>

                </ul>
              </li>
              
                   

              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/admin-login" onClick={handleLogout}>
                  Logout
                </Link>
              </li>

    

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
