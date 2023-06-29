import "../styles/signup/signup.scss";
import facebook from "../assets/icons/facebook.png";
import linkedIn from "../assets/icons/linkedin.png";
import googlePlus from "../assets/icons/google-plus.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { registerUser } from "../services/Register";
import { Loader } from "../common/Loader";
import { variableManager } from "../contexts/VariablesContext";

export default function Signup() {
  const navigate = useNavigate();
  const { operation, setUser } = useContext(variableManager);
  const [empty, setEmpty] = useState(false);
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "file"
        ? e.target.files[0]
        : e.target.value;

    setUserDetails({ ...userDetails, [e.target.name]: value });
  }

  function handleValidation() {
    const { fullName, email, password } = userDetails;
    if (fullName && email && password) {
      handleSubmit(userDetails);
    } else {
      setEmpty(true);
    }
  }

  async function handleSubmit(payload) {
    const { data, error } = await registerUser(payload);
    if (data) {
      setUser(data)
      navigate("/auth/verify", {replace:true});
    }
    console.log(data ? data : error);
  }
  return (
    <div className="signup-container">
      <div className="banner-section">
        <center className="logo-section">
          <h5>Eventbux</h5>
        </center>

        <div className="welcome-section">
          <center>
            <p className="welcome">Welcome Back!</p>
            <p
              className="note text-light pointer"
              onClick={() => navigate("/auth/login")}
            >
              Already have an account? Sign In to stay connected.
            </p>

            <div className="button-section">
              <button onClick={() => navigate("/auth/login")}>Sign In</button>
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

          <center
            className="for-mobile note pointer"
            onClick={() => navigate("/auth/login")}
          >
            Already have an acccount?{" "}
            <span className=" mt-3  fw-bolder">Login</span>
          </center>

          <form action="">
            <div className="input-section">
              <div>
                <label htmlFor="fullname">FULL NAME</label>
              </div>
              <input
                type="text"
                id="fullname"
                name="fullName"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Onoja Victor"
              />
              {empty && !userDetails.fullName && (
                <div className="error">Name is required</div>
              )}
            </div>

            <div className="input-section">
              <div>
                {" "}
                <label htmlFor="email">EMAIL ADDRESS</label>
              </div>
              <input
                type="text"
                id="email"
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="example@provider.com"
              />
              {empty && !userDetails.email && (
                <div className="error">Email is required</div>
              )}
            </div>

            <div className="input-section">
              <div>
                {" "}
                <label htmlFor="password">PASSWORD</label>
              </div>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="5+ characters"
              />
              {empty && !userDetails.password && (
                <div className="error">Password is required</div>
              )}
            </div>

            <div className="button-section">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleValidation();
                }}
              >
                {operation.pending ? Loader("info", "sm") : "Sign Up"}
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
