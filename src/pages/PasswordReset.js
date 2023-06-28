import "../styles/signup/signup.scss";
import facebook from "../assets/icons/facebook.png";
import linkedIn from "../assets/icons/linkedin.png";
import googlePlus from "../assets/icons/google-plus.png";
import OTPForm from "../components/OTPForm";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { variableManager } from "../contexts/VariablesContext";
import toggleObj from "../utils/ToggleObjects";

export default function PasswordReset() {
  const [passwordReset, setPasswordReset] = useState({
    enterEmail: true,
    enterOtp: false,
    newPassword: false,
  });
  const {} = useContext(variableManager);
  const navigate = useNavigate();

  function handleToggle(property) {
    const updatedObj = toggleObj(passwordReset, property);
    setPasswordReset(updatedObj);
  }

  return (
    <div className="signup-container">

      <div className="form-section">
        {passwordReset.enterOtp ? (
          <div className="content">
            <center>
              <h4>Verification Code</h4>
              <p className="note  pointer">
                Enter the 6-digit verification code sent to your email.
              </p>
            </center>
            <OTPForm />
            <div className="button-section mt-4">
              <button onClick={() => handleToggle("newPassword")}>
                Verify
              </button>
            </div>
            <center className="note pointer">
              Didn't get code? click to{" "}
              <span className="text-info fw-bold">Resend</span>{" "}
            </center>
          </div>
        ) : passwordReset.enterEmail ? (
          <div className="content">
            <center>
              <h4>Account Password Reset</h4>
            </center>

            <p className="note text-center">
              Kindly verify your registered email address to reset your
              password.
            </p>

            <center
              className="for-mobile note pointer"
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              Remember Password? <span className=" mt-3  fw-bolder">Login</span>
            </center>

            <form>
              <div className="input-section">
                <div>
                  <label htmlFor="email">EMAIL ADDRESS</label>
                </div>
                <input
                  type="text"
                  id="email"
                  placeholder="example@provider.com"
                />
              </div>

              <div className="button-section">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggle("enterOtp");
                  }}
                >
                  Send Code
                </button>
              </div>
            </form>
          </div>
        ) : passwordReset.newPassword ? (
          <div className="content">
            <center>
              <h4>Create New Password</h4>
            </center>

            <center
              className="for-mobile note pointer"
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              Remember Password? <span className=" mt-3  fw-bolder">Login</span>
            </center>

            <form>
              <div className="input-section">
                <div>
                  <label htmlFor="password">NEW PASSWORD</label>
                </div>
                <input type="password" id="password" placeholder="5+ digits" />
              </div>

              <div className="input-section">
                <div>
                  <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Repeat password"
                />
              </div>

              <div className="button-section">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // setOtpSent(true);
                  }}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </div>

      <div className="banner-section">
        <center className="logo-section">
          <h5>Eventbux</h5>
        </center>

        <div className="welcome-section">
          <center>
            <p className="welcome">Remember Password?</p>
            <p
              className="note text-light pointer"
              onClick={() => navigate("/auth/login")}
            >
              Sign In to stay connected.
            </p>

            <div className="button-section">
              <button onClick={() => navigate("/auth/login")}>Sign In</button>
            </div>
          </center>
        </div>

        <center className="copyright">Copyright © 2023</center>
      </div>

    </div>
  );
}
