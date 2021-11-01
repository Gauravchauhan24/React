import axios from 'axios'
import React ,{useState}from 'react'

export default function ForgotPassword() {

    const passwordError =
    "Must contain at least one number, one uppercase and lowercase letter, and Min 8 or more characters";
  const cnfPassError = "Password did not match";
  const emailError = "Enter valid Email Id ";
  const nameError = "Enter Vaild Name";
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
}
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [fullNameEdit, setFullNameEdit] = useState(true);
    const [loginStatusCode, setLoginStatusCode] = useState('');
  
  
    const [showPass, setPassShow] = useState('');
    const [loginPass, setLoginPass] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
  
    const [showConfPass, setConfPassShow] = useState('');
    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");
    var passwordCheck =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  var reEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return (
        <div className="w-95 flex">
        <div className="flex w-75"></div>
        <div className="w-25 mt3">
          <div className="flex w-100 fw6 ">Reset Password</div>
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
      </div>
    )

}
