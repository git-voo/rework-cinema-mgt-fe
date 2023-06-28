import "../styles/signup/signup.scss";
import facebook from "../assets/icons/facebook.png";
import linkedIn from "../assets/icons/linkedin.png";
import googlePlus from "../assets/icons/google-plus.png";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../services/Login";
import { useContext, useState } from "react";
import { Loader } from "../common/Loader";
import { variableManager } from "../contexts/VariablesContext";

export default function Login() {
  const navigate = useNavigate();
  const { operation } = useContext(variableManager);
  const [loginDetails, setLoginDetails] = useState({
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

    setLoginDetails({ ...loginDetails, [e.target.name]: value });
  }

  async function handleLoginSubmit(payload) {
    const { data, error } = await handleLogin(payload);
    if (data) {
      navigate("/user/dashboard");
    }
  }
  return (
    <div className="signup-container login-container">
      <div className="form-section">
        <div className="content">
          <center className="logo-section">
            <h5>Eventbux</h5>
          </center>

          <center>
            <h4>Sign In to Eventbux</h4>
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
            or use your email account
          </center>

          <form action="">
            <div className="input-section">
              <div>
                {" "}
                <label htmlFor="email">YOUR EMAIL</label>
              </div>
              <input
                type="text"
                id="email"
                name="email"
                onChange={(e) => handleChange(e)}
                placeholder="example@provider.com"
              />
            </div>

            <div className="input-section">
              <div className="d-flex justify-content-between">
                {" "}
                <label htmlFor="password">PASSWORD</label>{" "}
                <span
                  className="forgot-password pointer"
                  onClick={() => navigate("/auth/password-reset")}
                >
                  Forgot your password?
                </span>
              </div>
              <input
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
                placeholder="5+ characters"
              />
            </div>

            <div className="button-section">
              <button
                disabled={operation.pending}
                onClick={async (e) => {
                  e.preventDefault();
                  // const { data, error } = await handleLogin(loginDetails)
                  //  console.log(data, error)
                  handleLoginSubmit(loginDetails);
                }}
              >
                {operation.pending ? Loader("info", "sm") : "Sign In"}
              </button>
            </div>

            <center
              className="for-mobile note pointer"
              onClick={() => navigate("/auth/register")}
            >
              New User? <span className=" mt-3  fw-bolder">Signup Here</span>
            </center>
          </form>
        </div>
      </div>

      <div className="banner-section">
        <center className="logo-sectio">{/* <h5>Eventbux</h5> */}</center>

        <div className="welcome-section">
          <center>
            <p className="note text-light">New here?</p>
            <p className="welcome">Join Us Today!</p>

            <div className="button-section">
              <button onClick={() => navigate("/auth/register")}>
                Sign Up
              </button>
            </div>
          </center>
        </div>

        <center className="copyright">Copyright © 2023</center>
      </div>
    </div>
  );
}
