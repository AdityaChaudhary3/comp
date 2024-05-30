import React,{useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/studentZone/Login.css";
import axios from "axios";

const FranchiseLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async(e) => { 
    e.preventDefault();
    console.log(email, password);
    const response = await axios.post('http://localhost:8000/api/franchise/franchise-login', {
      emailIdOfInstitute: email,
      password: password
    }).then((response) => {
      console.log(response.data.data);
    }).catch((err) => {
      console.log(err);
    });

  };

  return (
    <div>
      <Header />
      <div className="main">
        <div className="imgge"></div>
        <div className="bg-text">
          <h1>Franchise Login</h1>
        </div>
      </div>

      <div className="LoginContainer">
        <div className="LoginContent">
          <div className="Loginpara">
            <p>ENTER VALID CREDENTIALS TO LOGIN INTO YOUR PANEL</p>
          </div>

        <form onSubmit={handleSubmit}>
          <div className="LoginForm">
            <div>
              <div>
                <label htmlFor="stateSelect">Email of Institute</label>
              </div>
              <input type="text" name="" id="DistrictSelect" value={email} 
              onChange={handleEmailChange}/>
            </div>

            <div>
              <div>
                <label htmlFor="stateSelect">Password</label>
              </div>
              <input type="password" name="" id="DistrictSelect" value={password}
              onChange={handlePasswordChange}/>
            </div>
          </div>

            <div>
              <div>
                <button className="button"> Login</button>
              </div>
            </div>

        </form>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FranchiseLogin;
