import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div>
      <div className="container">
        <h2>Login</h2>
        <input type="email" placeholder="Email" /> 
        <input type="password" placeholder="Password" />     
        <button>Login</button>
        <p>
          New User? <Link to="/Pages">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
