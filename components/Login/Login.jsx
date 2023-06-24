import React, { useState, useEffect } from "react";
import PasswordInfo from "./PasswordInfo";
import {
  CheckEmailValidity,
  CheckPasswordValidity,
} from "@/HelperFunctions/LoginFunctions";
import "./Login.css";

function Login(props) {
  const [emailinput, setemailinput] = useState("");
  const [passwordinput, setpasswordinput] = useState("");
  const [isemailvalid, setisemailvalid] = useState(false);
  const [ispasswordvalid, setispasswordvalid] = useState(false);
  const [isformvalid, setisformvalid] = useState(false);
  const [showPasswordInfo, setShowPasswordInfo] = useState(false);

  function HandleEmail(event) {
    const email = event.target.value;
    setemailinput(email);
  }

  function HandlePassword(event) {
    const password = event.target.value;
    setpasswordinput(password);
    setShowPasswordInfo(password.length > 0);
  }

  useEffect(() => {
    const isEmailValid = CheckEmailValidity(emailinput);
    const isPasswordValid = CheckPasswordValidity(passwordinput);

    setisemailvalid(isEmailValid);
    setispasswordvalid(isPasswordValid);
    setisformvalid(isEmailValid && isPasswordValid);
  }, [emailinput, passwordinput]);

  function HandleLogin() {
    props.onLoginButtonClicked();
  }

  return (
    <div className="LoginContainer">
      <form className="LoginForm">
        <input
          onChange={HandleEmail}
          type="email"
          placeholder="Email"
          name="emailinput"
          value={emailinput}
          // style={{
          //   backgroundColor: isemailvalid
          //     ? "rgba(144, 238, 144, 0.4)"
          //     : "rgba(255, 99, 71, 0.2)",
          // }}
          style={{
            backgroundColor: isemailvalid ? "rgba(144, 238, 144, 0.4)" : " ",
          }}
          required
        />
        <input
          onChange={HandlePassword}
          type="password"
          placeholder="Password"
          name="passwordinput"
          value={passwordinput}
          // style={{
          //   backgroundColor: ispasswordvalid
          //     ? "rgba(144, 238, 144, 0.4)"
          //     : "rgba(255, 99, 71, 0.2)",
          // }}
          style={{
            backgroundColor: ispasswordvalid ? "rgba(144, 238, 144, 0.4)" : " ",
          }}
          required
        />
        {showPasswordInfo && !ispasswordvalid && <PasswordInfo />}
        <button
          onClick={HandleLogin}
          type="submit"
          disabled={!isformvalid}
          // className={isformvalid ? "" : "disabled"}
          style={{
            backgroundColor: isformvalid ? "#ff5722" : "#ccc",
            cursor: !isformvalid ? "not-allowed" : "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
