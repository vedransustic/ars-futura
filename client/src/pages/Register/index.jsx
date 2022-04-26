import React, { useState } from "react";
import { Button, Title } from "../../components";
import "./index.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  console.log(username, " => ", password, " => ", email);
  return (
    <form className="register">
      <Title text="REGISTER" />
      <label className="login-field">
        <h2>Username:</h2>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="login-field">
        <h2>Password:</h2>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label className="login-field">
        <h2>Email:</h2>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <div className="buttons">
        <Button text="Register" />
        <Link to="/login">
          <Button text="Back to Login" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
