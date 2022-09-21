import React from "react";
import "./log.css";
import { Link } from "react-router-dom";
import { useState } from "react";


const Login = () => {
   const[credentials,setCredentials]=useState({email:"",password:""});
  
  const handleSubmit=async (e)=>{
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
  
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      });
      const json = await response.json();
      console.log(json);
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
    <div className="logger">
      <div className="box">
        <form className="log" onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          <div className="inputBox">
            <input type="email"  required="required" value={credentials.email} onChange={onChange}/>
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required="required" value={credentials.password} onChange={onChange} />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <Link to="#">Forgot Password ?</Link>
            <Link to="#">Signup</Link>
          </div>
          <input type="submit"  value="Login" />
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
