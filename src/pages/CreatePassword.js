import "../styles/signup/signup.scss";
import facebook from "../assets/icons/facebook.png";
import linkedIn from "../assets/icons/linkedin.png";
import googlePlus from "../assets/icons/google-plus.png";
import OTPForm from "../components/OTPForm";
import { useContext, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { variableManager } from "../contexts/VariablesContext";
 
export default function CreatePassword() {
  const [otpSent, setOtpSent] = useState(false);
 

  const {} = useContext(variableManager)
 const navigate = useNavigate()
 
  return (
    <div className="signup-container">
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
              <button
                onClick={() =>  navigate("/auth/login") }
              >
                Sign In
              </button>
            </div>
          </center>
        </div>

        <center className="copyright">Copyright © 2023</center>
      </div>

      <div className="form-section">
        {otpSent ? (
          <div className="content">
            <center>
              <h4>Create New Password</h4>
              <p className="note  pointer">
                Enter the 6-digit verification code sent to your email.
              </p>
            </center>
            <OTPForm />
          </div>
        ) : (
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
                    setOtpSent(true);
                  }}
                >
                  Send Code
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
