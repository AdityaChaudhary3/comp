import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid" id="background">
          <Link class="navbar-brand" to="#">
            Navbar
          </Link>
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

              <li class="nav-item dropdown ">
                <Link
                  class="nav-link dropdown-toggle active"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  ABOUT
                </Link>
                <ul class="dropdown-menu" /*style={{backgroundColor:'cyan'}}*/ >
                  <li>
                    <Link class="dropdown-item " to="/about">
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      WHY CHOOSE US
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      AFFLIATION
                    </Link>
                  </li>
                </ul>
              </li>


              <li class="nav-item">
                <Link class="nav-link active" to="/course">
                  COURSES
                </Link>
              </li>



              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle active"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  STUDENT ZONE
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/SignUp">
                      STUDENT REGISTRATION
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/SignIn">
                      STUDENT LOGIN
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      STUDENT VERIFICATION
                    </Link>
                  </li>
                </ul>
              </li>



              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle active"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FRANCHISE
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/franchiseLogin">
                    LOGIN
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/franchiseSignUp">
                      OINLINE FRANCHISE APPLICATION
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      APPLICATION STATUS
                    </Link>
                  </li>
                </ul>
              </li>



            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
