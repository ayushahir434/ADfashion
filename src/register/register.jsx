import React from "react";
import { Link } from "react-router-dom"; 
import "../section/section.css";

function Register() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Create Account</h2>
        <p>Please fill in the details to register.</p>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
        
        
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default Register;
