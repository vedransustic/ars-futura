import React, { useState } from "react";
import { Button, Title } from "../../components";
import "./index.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username, " => ", password);
  return (
    <form className="login">
      <Title text="LOGIN" />
      <div className="login-field">
        <h2>Username:</h2>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="login-field">
        <h2>Password:</h2>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="buttons">
        <Button text="Login" />
        <div className="or">- or -</div>
        <Link to="/register">
          <Button text="Register" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
