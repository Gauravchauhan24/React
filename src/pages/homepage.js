import React, { useState } from "react";
// aaaaaA12$
import ForgotPassword from "../common/forgot";
import { useHistory } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
export default function Homepage() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [fullNameEdit, setFullNameEdit] = useState(true);
  const [loginStatusCode, setLoginStatusCode] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);


  const [showPass, setPassShow] = useState('');
  const [loginPass, setLoginPass] = useState("");
  const [loginEmail, setLoginEmail] = useState("");

  const [showConfPass, setConfPassShow] = useState('');
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const history = useHistory();
  function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  }
  var passwordCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  var reEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  function emailCheck() {
    console.log("cvbnm====>>>>>>>>>>", reEmail.test(email));
  }

  const a = () => {
    alert(88);
  };

const handleRegistration=async()=>{
let response=await axios.post('http://localhost:3002/registration',{
  userName: fullName,
      userEmail: email,
      password:password,
     confirmpassword:cnfPassword
})
console.log("=>>>>>>>>",response)
}

const handleLogin=async()=>{
  let response=await axios.post('http://localhost:3002/login',{
 
      userEmail: loginEmail,
      password:loginPass,
     
})
console.log("=>>>>>>>>",response.data)

setLoginStatusCode(response.status)
if(response.status==200)
{
  localStorage.setItem('userEmail',response.data.userEmail)
  localStorage.setItem('userName',response.data.userName)
  localStorage.setItem('userId',response.data.userId)


  // alert(8)
  history.push("/lobby");
  // <Redirect to="/lobby" />

  
}

}

  const passwordError =
    "Must contain at least one number, one uppercase and lowercase letter, and Min 8 or more characters";
  const cnfPassError = "Password did not match";
  const emailError = "Enter valid Email Id ";
  const nameError = "Enter Vaild Name";
  // console.log("cvbnm====>>>>>>>>>>", reEmail.test(email), email !== "");
  return (
    <div className="pa3 backgroundLogin">
      <div className="w-95 flex">
        <div className="flex w-75 bg-re">    </div>
        <div className="flex flex-column w-25 mt5 items-center justify-center">
          <div className="flex w-100 fw6 ">Registration</div>
          <div className="flex w-100 flex-column" onSubmit={() => alert(8)}>
            <div className="flex flex-column  w-100 mt1 ">
              <div className="flex flex-column w-100">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-100 mt2 pa1 "
                  type="text"
                  value={email}
                  placeholder="Enter Email id "
                />
                <p className="red fw6 f5 lh-copy">
                  {reEmail.test(email) || email == "" ? "" : emailError}
                </p>
              </div>
              <div className="flex flex-column w-100">
                <input
                  onChange={(e) => (setFullName(e.target.value),setFullNameEdit(false))}
                  className="w-100 mt2 pa1"
                  type="text"
                  placeholder="Enter Your Full Name"
                  required=""
                />
                <p className="red fw6 f5 lh-copy">
                  {fullName ||fullNameEdit  ? "" : nameError}
                </p>
              </div>

              <div className="flex flex-column w-100">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-100 99 mt2 pa1"
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="Enter password "
                />
                <p className="red fw6 f5 lh-copy">
                  {passwordCheck.test(password)||password == "" ? "" : passwordError}
                </p>
                {!showPass ? (
                  <i
                    class="fas fa-eye-slash tl mt3  pointer"
                    onClick={() => setPassShow(true)}
                    style={{ position: "fixed", right: "6%" }}
                  ></i>
                ) : (
                  <i
                    class="fas fa-eye tl mt3  pointer"
                    onClick={() => setPassShow(false)}
                    style={{ position: "fixed", right: "6%" }}
                  ></i>
                )}
                {/* <i class="fas fa-eye tl "  style={{position:'absolute'}} ></i> */}
              </div>

              <div className="flex flex-column w-100">
                <input
                  onChange={(e) => setCnfPassword(e.target.value)}
                  className="w-100 mt2 pa1"
                  type={`${showConfPass ? "text" : "password"}`}
                  placeholder="Confirm password "
                />
                <p className="red fw6 f5 lh-copy">
                  {password === cnfPassword ? "" : cnfPassError}
                </p>
                {!showConfPass ? (
                  <i
                    onClick={() => setConfPassShow(true)}
                    class="fas pointer  fa-eye-slash tl mt3 "
                    style={{ position: "fixed", right: "6%" }}
                  ></i>
                ) : (
                  <i
                    onClick={() => setConfPassShow(false)}
                    class="fas pointer  fa-eye tl mt3 "
                    style={{ position: "fixed", right: "6%" }}
                  ></i>
                )}
              </div>
              <div className="w-100 flex items-center justify-center">
                <button
                  style={{
                    opacity:
                      fullName != "" &&
                      reEmail.test(email) &&
                      password === cnfPassword &&
                      passwordCheck.test(password)
                        ? 1
                        : 0.6,
                  }}
                  onClick={() => handleRegistration()}
                  className="w-70 pa2 br2 bg-green mt2  borderZero white pointer"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     {!forgotPassword ? <div className="w-95 flex">
        <div className="flex w-75"></div>
        <div className="w-25 mt3">
          <div className="flex w-100 fw6 ">Login</div>
          <div className="flex w-100 flex-column">
            <div className="flex flex-column  w-100 mt1 ">
              <div className="flex flex-column w-100">
                <input
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-100 mt2 pa1 "
                  type="text"
                  value={loginEmail}
                  placeholder="Enter Email id "
                />
                <p className="red fw6 f5 lh-copy">
                  {(reEmail.test(loginEmail) || loginEmail=="") ? "" : emailError}
                </p>
              </div>
              <div className="flex w-100">
                <input
                  onChange={(e) => setLoginPass(e.target.value)}
                  className="w-100 mt2 pa1"
                  type="text"
                  value={loginPass}
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex f7  mt2 mb2  ttu red fw8 items-end justify-end w-100 pointer" onClick={()=>setForgotPassword(true)}>
                forgot password
              </div>

              <div className="w-100 flex items-center justify-center">
                <button
                  onClick={() =>
                    loginPass != "" && reEmail.test(loginEmail)
                      ? handleLogin()
                      : null
                  }
                  style={{
                    opacity:
                      loginPass != "" && reEmail.test(loginEmail) ? 1 : 0.6,
                  }}
                  className="w-70 pa2 br2 bg-green mt2  borderZero white pointer"
                >
                  Login
                </button>
              </div>
              <div className="mt2  fw6 flex items-center justify-center red">{loginStatusCode==202&&"Password is wrong"} {loginStatusCode==203&&"Email Address not found"}</div>
            </div>
          </div>
        </div>
      </div>:<ForgotPassword />
      }
    </div>
  );
}
