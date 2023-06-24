// using useReducer and useEffect
"use client";
import React, { useReducer, useEffect, useState } from "react";
import PasswordInfo from "@/components/Login/PasswordInfo";
import {
  CheckEmailValidity,
  CheckPasswordValidity,
} from "@/HelperFunctions/LoginFunctions";
import "./page.css";
import { signUpWithEmail, logInWithEmail } from "@/store/userauth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { signInWithGoogle, signOut } from "@/store/userauth";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  isConfirmPasswordValid: false,
  isEmailValid: false,
  isPasswordValid: false,
  isLoginFormValid: false,
  isSignupFormValid: false,
  isNewUser: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };
    case "SET_CONFIRM_PASSWORD_VALIDITY":
      return { ...state, isConfirmPasswordValid: action.payload };
    case "SET_EMAIL_VALIDITY":
      return { ...state, isEmailValid: action.payload };
    case "SET_PASSWORD_VALIDITY":
      return { ...state, isPasswordValid: action.payload };
    case "SET_LOGIN_FORM_VALIDITY":
      return { ...state, isLoginFormValid: action.payload };
    case "SET_SIGNUP_FORM_VALIDITY":
      return { ...state, isSignupFormValid: action.payload };
    case "SET_NEW_USER":
      return { ...state, isNewUser: action.payload };
    default:
      return state;
  }
}

function Login(props) {
  const router = useRouter();
  const logindispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [usernotfound, setusernotfound] = useState(false);
  const [useralreadyexists, setuseralreadyexists] = useState(false);
  const [wrongpassword, setwrongpassword] = useState(false);
  const [showotheroptions, setshowotheroptions] = useState(false);
  const [showmainoptions, setshowmainoptions] = useState(true);

  function setshowoptions() {
    setshowotheroptions((prev) => !prev);
    setshowmainoptions((prev) => !prev);
    dispatch({ type: "SET_NEW_USER", payload: false });
  }

  useEffect(() => {
    const isEmailValid = CheckEmailValidity(state.email);
    const isPasswordValid = CheckPasswordValidity(state.password);
    const isConfirmPasswordValid =
      state.confirmPassword === state.password && state.password.length > 0;

    dispatch({ type: "SET_EMAIL_VALIDITY", payload: isEmailValid });
    dispatch({ type: "SET_PASSWORD_VALIDITY", payload: isPasswordValid });
    dispatch({
      type: "SET_CONFIRM_PASSWORD_VALIDITY",
      payload: isConfirmPasswordValid,
    });
    dispatch({
      type: "SET_LOGIN_FORM_VALIDITY",
      payload: isEmailValid && isPasswordValid,
    });
    dispatch({
      type: "SET_SIGNUP_FORM_VALIDITY",
      payload: isEmailValid && isPasswordValid && isConfirmPasswordValid,
    });
  }, [state.email, state.password, state.confirmPassword]);

  function clearInputs() {
    dispatch({ type: "SET_EMAIL", payload: "" });
    dispatch({ type: "SET_PASSWORD", payload: "" });
    dispatch({ type: "SET_CONFIRM_PASSWORD", payload: "" });
  }

  function clearwarnings() {
    setuseralreadyexists(false);
    setwrongpassword(false);
    setusernotfound(false);
    setusernotfound(false);
    setwrongpassword(false);
  }

  function handleNewUser() {
    clearInputs();
    dispatch({ type: "SET_NEW_USER", payload: true });
    clearwarnings();
  }

  function handleBackToLogin() {
    clearInputs();
    dispatch({ type: "SET_NEW_USER", payload: false });
    clearwarnings();
  }

  function handleEmail(event) {
    const email = event.target.value;
    dispatch({ type: "SET_EMAIL", payload: email });
  }

  function handlePassword(event) {
    const password = event.target.value;
    dispatch({ type: "SET_PASSWORD", payload: password });
  }

  function handleConfirmPassword(event) {
    const confirmPassword = event.target.value;
    dispatch({ type: "SET_CONFIRM_PASSWORD", payload: confirmPassword });
  }
  function handleLogin(event) {
    clearwarnings();
    event.preventDefault();
    console.log("login clicked");
    console.log(state.email, state.password);
    logindispatch(logInWithEmail(state.email, state.password))
      .then(() => {
        clearInputs();
        router.push("/");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        if (error.message === "User not found") {
          setusernotfound(true);
        } else if (error.message === "Wrong password") {
          setwrongpassword(true);
        }
      });
  }

  function handleSignup(event) {
    clearwarnings();
    event.preventDefault();
    logindispatch(signUpWithEmail(state.email, state.password))
      .then(() => {
        router.push("/login");
        clearInputs();
        logindispatch(signOut());
        dispatch({ type: "SET_NEW_USER", payload: false });
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        if (error.message === "Email already in use") {
          setuseralreadyexists(true);
        }
      });
  }

  function handlegooglesignin() {
    logindispatch(signInWithGoogle());
    router.push("/");
  }

  const {
    email,
    password,
    confirmPassword,
    isConfirmPasswordValid,
    isEmailValid,
    isPasswordValid,
    isLoginFormValid,
    isSignupFormValid,
    isNewUser,
  } = state;

  return (
    <div className="mainContainer">
      <div className="Login_signup_containers">
        <div className="login_containers_header">
          <h2 className="heading">{isNewUser ? "Signup" : "Login"}</h2>
          <button className="showbutton" onClick={setshowoptions}>
            {showmainoptions ? <BsChevronUp /> : <BsChevronDown />}
          </button>
        </div>
        {showmainoptions && (
          <form className="LoginForm">
            <input
              onChange={handleEmail}
              type="email"
              placeholder="Email"
              name="emailinput"
              value={email}
              style={{
                backgroundColor: isEmailValid ? "rgba(144, 238, 144, 0.4)" : "",
                color: isEmailValid ? "green" : "",
              }}
              required
            />
            <input
              onChange={handlePassword}
              type="password"
              placeholder="Password"
              name="passwordinput"
              value={password}
              style={{
                backgroundColor: isPasswordValid
                  ? "rgba(144, 238, 144, 0.4)"
                  : "",
                color: isPasswordValid ? "green" : "",
              }}
              required
            />
            {isNewUser && (
              <input
                onChange={handleConfirmPassword}
                type="password"
                placeholder="Confirm Password"
                name="confirmpasswordinput"
                value={confirmPassword}
                style={{
                  backgroundColor: isConfirmPasswordValid
                    ? "rgba(144, 238, 144, 0.4)"
                    : "",
                  color: isPasswordValid ? "green" : "",
                }}
                required
              />
            )}

            {isNewUser && password.length > 0 && !isPasswordValid && (
              <PasswordInfo />
            )}

            {!isNewUser && (
              <button
                onClick={handleLogin}
                type="submit"
                disabled={!isLoginFormValid}
                style={{
                  backgroundColor: isLoginFormValid ? "#ff5722" : "#ccc",
                  cursor: !isLoginFormValid ? "not-allowed" : "pointer",
                }}
              >
                Login
              </button>
            )}

            {!isNewUser && (
              <button onClick={handleNewUser} type="button">
                New User ?
              </button>
            )}

            {isNewUser && (
              <button
                onClick={handleSignup}
                type="submit"
                disabled={!isSignupFormValid}
                style={{
                  backgroundColor: isSignupFormValid ? "#ff5722" : "#ccc",
                  cursor: !isSignupFormValid ? "not-allowed" : "pointer",
                }}
              >
                Sign Up
              </button>
            )}

            {isNewUser && (
              <button onClick={handleBackToLogin} type="button">
                Back To Login
              </button>
            )}

            {!isNewUser && usernotfound && (
              <h2 className="warningmsg">User not found</h2>
            )}

            {!isNewUser && wrongpassword && !usernotfound && (
              <h2 className="warningmsg">Check Email or Password</h2>
            )}

            {isNewUser && useralreadyexists && (
              <h2 className="warningmsg">User already Exits</h2>
            )}
          </form>
        )}
      </div>
      <div className="other_login_containers">
        <div className="login_containers_header">
          <h2 className="heading">Other Login Options</h2>
          <button className="showbutton" onClick={setshowoptions}>
            {showotheroptions ? <BsChevronUp /> : <BsChevronDown />}
          </button>
        </div>
        {showotheroptions && (
          <button className="signingooglebutton" onClick={handlegooglesignin}>
            SignIn With Google
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
