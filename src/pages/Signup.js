import "../styles/signup/signup.scss";
import facebook from "../assets/icons/facebook.png";
import linkedIn from "../assets/icons/linkedin.png";
import googlePlus from "../assets/icons/google-plus.png"; 
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate()
  return (
    <div className="signup-container">
      <div className="banner-section">
        <center className="logo-section">
          <h5>Eventbux</h5>
        </center>

        <div className="welcome-section">
          <center>
            <p className="welcome">Welcome Back!</p>
            <p className="note text-light pointer"
            onClick={()=>navigate("/auth/login")}
            >
              Already have an account? Sign In to stay connected.
            </p>

            <div className="button-section">
              <button 
              onClick={()=>navigate("/auth/login")}
              >Sign In</button>
            </div>
          </center>
        </div>

        <center className="copyright">Copyright © 2023</center>
      </div>

      <div className="form-section">
        <div className="content">
          <center>
            <h4>Create Account</h4>
            <div className="icons-section">
              <div className="icon">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="icon">
                <img src={googlePlus} alt="google plus" />
              </div>
              <div className="icon">
                <img src={linkedIn} alt="linkedin" />
              </div>
            </div>
            or use your email for registration
          </center>

          <center className="for-mobile note pointer"
           onClick={()=>navigate("/auth/login")}
          >
            Already have an acccount? <span className=" mt-3  fw-bolder">Login</span>
          </center>

          <form action="">
            <div className="input-section">
              <div>
                <label htmlFor="fullname">FULL NAME</label>
              </div>
              <input type="text" id="fullname" placeholder="Onoja Victor" />
            </div>

            <div className="input-section">
              <div>
                {" "}
                <label htmlFor="email">EMAIL ADDRESS</label>
              </div>
              <input
                type="text"
                id="email"
                placeholder="example@provider.com"
              />
            </div>

            <div className="input-section">
              <div>
                {" "}
                <label htmlFor="password">PASSWORD</label> 
              </div>
              <input type="text" placeholder="5+ characters" />
            </div>

            <div className="button-section">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  
                }}
              >
                Sign Up
              </button>
            </div>

            <p className="note">
              By clicking "Sign Up" you agree to our Terms of Service and
              Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
