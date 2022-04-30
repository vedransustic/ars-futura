import React, { useState, useEffect, useRef } from "react";
import { Button, Title } from "../../components";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_URL, PASSWORD_REGEX, USERNAME_REGEX } from "../../const";
import axios from "../../api/axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";

const Login = () => {
  const usernameRef = useRef(null);
  const errRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USERNAME_REGEX.test(username);
    const v2 = PASSWORD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrorMessage("Error: Invalid entry. Try again");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response) {
        const { _id, username, todoLists } = response.data.user;

        dispatch(login(_id, username, todoLists));

        navigate("/lists");
      }
      setUsername("");
      setPassword("");
    } catch (error) {
      if (!error?.response) {
        setErrorMessage("No Server Response");
      } else {
        setErrorMessage("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section className="login">
      <p
        ref={errRef}
        className={errorMessage ? "error-message" : "offscreen"}
        aria-live="assertive"
      >
        {errorMessage}
      </p>
      <Title text="LOGIN" />
      <form onSubmit={handleSubmit}>
        <>
          <label htmlFor="username" className="login-field">
            Username:
          </label>
          <input
            type="text"
            id="username"
            ref={usernameRef}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </>
        <>
          <label htmlFor="password" className="login-field">
            Password:
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </>
        <Button text="Login" />
      </form>
      <div className="sign-in">
        <p>Dont have account?</p>
        <Link to="/register">
          <div className="link">Sign up</div>
        </Link>
      </div>
    </section>
  );
};

export default Login;
