import React, { useState, useEffect, useRef } from "react";
import { Button, Title } from "../../components";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import {
  ERROR_TIMER,
  INPUT_ERROR,
  LOGIN_BUTTON,
  LOGIN_TITLE,
  PASSWORD_REGEX,
  USERNAME_REGEX,
} from "../../const";
import { APP_LISTS_URL, APP_REGISTER_URL, LOGIN_URL } from "../../const/routes";
import axios from "../../api/axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";

const Login = () => {
  const usernameRef = useRef(null);
  const errRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      setErrorMessage(INPUT_ERROR);
      setTimeout(() => setErrorMessage(""), ERROR_TIMER);
      return;
    }
    try {
      await axios
        .post(LOGIN_URL, JSON.stringify({ username, password }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          if (response.status === 200) {
            const { _id, username, todoLists } = response.data.user;
            dispatch(login(_id, username, todoLists));
            navigate(APP_LISTS_URL);
          }
        });
    } catch (error) {
      setErrorMessage("ERROR: " + error);
      errRef.current.focus();
    }
    setUsername("");
    setPassword("");
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
      <Title text={LOGIN_TITLE} />
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
        <Button text={LOGIN_BUTTON} />
      </form>
      <div className="sign-in">
        <p>Dont have account?</p>
        <Link to={APP_REGISTER_URL}>
          <div className="link">Sign up</div>
        </Link>
      </div>
    </section>
  );
};

export default Login;
