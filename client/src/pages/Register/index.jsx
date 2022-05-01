import React, { useState, useEffect, useRef } from "react";
import { Button, Title } from "../../components";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  USERNAME_REGEX,
  PASSWORD_REGEX,
  EMAIL_REGEX,
  REGISTER_TITLE,
} from "../../const";
import { APP_LOGIN_URL, REGISTER_URL } from "../../const/routes";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import axios from "../../api/axios";

const Register = () => {
  const usernameRef = useRef(null);
  const errRef = useRef(null);

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [conformPassword, setConformPassword] = useState("");
  const [validConformPassword, setValidConformPassword] = useState(false);
  const [conformPasswordFocus, setConformPasswordFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USERNAME_REGEX.test(username);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
    const match = password === conformPassword;
    setValidConformPassword(match);
  }, [password, conformPassword]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    setErrorMessage("");
  }, [username, password, conformPassword, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USERNAME_REGEX.test(username);
    const v2 = PASSWORD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrorMessage("Error: Invalid entry");
      return;
    }
    try {
      await axios
        .post(REGISTER_URL, JSON.stringify({ username, password, email }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then(setSuccess(true));
    } catch (error) {
      setErrorMessage(error?.response.message);
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to={APP_LOGIN_URL}>Sign in</Link>
          </p>
        </section>
      ) : (
        <section className="register">
          <p
            ref={errRef}
            className={errorMessage ? "error-message" : "offscreen"}
            aria-live="assertive"
          >
            {errorMessage}
          </p>
          <Title text={REGISTER_TITLE} />
          <form onSubmit={handleSubmit}>
            <>
              <label htmlFor="username" className="login-field">
                Username:
                <span className={validUsername ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} size={"1x"} />
                </span>
                <span
                  className={validUsername || !username ? "hide" : "invalid"}
                >
                  <FontAwesomeIcon icon={faTimes} size={"1x"} />
                </span>
              </label>

              <input
                type="text"
                id="username"
                ref={usernameRef}
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
                required
                aria-invalid={validUsername ? "false" : "true"}
                aria-describedby="username-note"
                onFocus={() => setUsernameFocus(true)}
                onBlur={() => setUsernameFocus(false)}
              />
              <p
                id="username-note"
                className={
                  username && usernameFocus && !validUsername
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} size={"1x"} />
                Username must be 4 to 24 characters long.
                <br />
                Must begin with letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
                <br />
              </p>
            </>

            <>
              <label htmlFor="password" className="login-field">
                Password:
                <span className={validPassword ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} size={"1x"} />
                </span>
                <span
                  className={validPassword || !password ? "hide" : "invalid"}
                >
                  <FontAwesomeIcon icon={faTimes} size={"1x"} />
                </span>
              </label>

              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-invalid={validUsername ? "false" : "true"}
                aria-describedby="password-note"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
              <p
                id="password-note"
                className={
                  password && passwordFocus && !validPassword
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} size={"1x"} />
                Password must be 8 to 24 characters long.
                <br />
                Must include uppercase, lowercase, number, special character.
                <br />
                This includes: <span aria-label={"exclamation mark"}>
                  !
                </span>{" "}
                <span aria-label={"at symbol"}>@</span>{" "}
                <span aria-label={"hashtag"}>#</span>{" "}
                <span aria-label={"dollar sign"}>$</span>{" "}
                <span aria-label={"percentage"}>%</span>
                <br />
              </p>
            </>

            <>
              <label htmlFor="conform-password" className="login-field">
                Conform Password:
                <span
                  className={
                    validConformPassword && conformPassword ? "valid" : "hide"
                  }
                >
                  <FontAwesomeIcon icon={faCheck} size={"1x"} />
                </span>
                <span
                  className={
                    validConformPassword || !conformPassword
                      ? "hide"
                      : "invalid"
                  }
                >
                  <FontAwesomeIcon icon={faTimes} size={"1x"} />
                </span>
              </label>

              <input
                type="password"
                id="conform-password"
                onChange={(e) => setConformPassword(e.target.value)}
                required
                aria-invalid={validConformPassword ? "false" : "true"}
                aria-describedby="conform-password-note"
                onFocus={() => setConformPasswordFocus(true)}
                onBlur={() => setConformPasswordFocus(false)}
              />
              <p
                id="conform-password-note"
                className={
                  conformPassword &&
                  conformPasswordFocus &&
                  !validConformPassword
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} size={"1x"} />
                Both Passwords must match.
              </p>
            </>

            <>
              <label htmlFor="email" className="login-field">
                Email:
                <span className={validEmail ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} size={"1x"} />
                </span>
                <span className={validEmail || !email ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} size={"1x"} />
                </span>
              </label>

              <input
                type="email"
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="email-note"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <p
                id="email-note"
                className={
                  email && emailFocus && !validEmail
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} size={"1x"} />
                Email consists of [username]@[domain name].[domain].
                <br />
                For example: jon_doe@google.com
              </p>
            </>

            <Button
              text="Sign Up"
              disable={
                !validUsername ||
                !validPassword ||
                !validConformPassword ||
                !validEmail
              }
            />
          </form>
          <div className="sign-in">
            <p>Already have an account?</p>
            <Link to={APP_LOGIN_URL}>
              <div className="link">Sign in</div>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Register;
