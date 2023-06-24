// using useReducer and useEffect

import React, { useReducer, useEffect } from "react";
import PasswordInfo from "./PasswordInfo";
import {
  CheckEmailValidity,
  CheckPasswordValidity,
} from "@/HelperFunctions/LoginFunctions";

import "./LoginSignup.css";

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
  const [state, dispatch] = useReducer(reducer, initialState);

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
    props.setusernotfound(false);
    props.setwrongpassword(false);
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
    event.preventDefault();
    props.onLoginButtonClicked(state.email, state.password);
  }

  function handleSignup(event) {
    event.preventDefault();
    props.onSignupButtonClicked(state.email, state.password);
    clearInputs();
    dispatch({ type: "SET_NEW_USER", payload: false });
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
    <div className="LoginContainer">
      <form className="LoginForm">
        <input
          onChange={handleEmail}
          type="email"
          placeholder="Email"
          name="emailinput"
          value={email}
          style={{
            backgroundColor: isEmailValid ? "rgba(144, 238, 144, 0.4)" : "",
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
            backgroundColor: isPasswordValid ? "rgba(144, 238, 144, 0.4)" : "",
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
            }}
            required
          />
        )}

        {password.length > 0 && !isPasswordValid && <PasswordInfo />}

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

        {!isNewUser && props.usernotfound && <h2>User not found.</h2>}

        {!isNewUser && props.wrongpassword && (
          <h2>Wrong Password. Try Again</h2>
        )}
      </form>
    </div>
  );
}

export default Login;
