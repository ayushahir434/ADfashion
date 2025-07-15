import React from "react";
import { useNavigate } from "react-router-dom";
import "../section/section.css";

function Login() {
  const navigate = useNavigate();

  const goToRegister = (e) => {
    e.preventDefault(); 
    navigate("/register");
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Welcome Back</h2>
        <p>Please login to your account</p>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <button onClick={goToRegister} className="registration">Go to Registration</button>
      </form>
    </div>
  );
}

export default Login;
