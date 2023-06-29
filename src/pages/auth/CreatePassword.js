import "../../styles/signup/signup.scss";
import facebook from "../../assets/icons/facebook.png";
import linkedIn from "../../assets/icons/linkedin.png";
import googlePlus from "../../assets/icons/google-plus.png";
import OTPForm from "../../components/OTPForm";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { variableManager } from "../../contexts/VariablesContext";
import { axiosInstance } from "../../services/AxiosInstance";
import { Loader } from "../../common/Loader";

export default function CreatePassword() {
  const { setUser, operation } = useContext(variableManager);
  const [empty, setEmpty] = useState(false);
  const [error, setError] = useState("");
  const [payload, setPayload] = useState({
    newPassword: "",
    confirmPassword: "",
    email: "",
    id: "",
  });

  const {} = useContext(variableManager);
  const navigate = useNavigate();
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const email = searchParams.get("email") 

  function handleValidation() {
    if (payload.newPassword && payload.confirmPassword) {
      if (payload.confirmPassword === payload.newPassword) {
        createNewPassword({...payload, email});
      } else {
        setError("Passwords do not match");
      }
    } else {
      setEmpty(true);
    }
  }

  async function createNewPassword(payload) {
    await axiosInstance
      .put("/auth/password-reset", payload)
      .then((resp) => {
        setUser(resp.data.data);
        navigate("/user/dashboard", {replace:true});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="signup-container">
      <div className="form-section">
        <div className="content">
          <center>
            <h4>Create New Password</h4>
          </center>

          {/* <center
            className="for-mobile note pointer"
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            Remember Password? <span className=" mt-3  fw-bolder">Login</span>
          </center> */}

          <form>
            <div className="input-section">
              <div>
                <label htmlFor="password">NEW PASSWORD</label>
              </div>
              <input
                type="password"
                id="password"
                placeholder="5+ digits"
                onChange={(e) => {
                  setError("");
                  setPayload({ ...payload, newPassword: e.target.value });
                }}
              />
              {empty && !payload.newPassword && (
                <div className="error">Field is required</div>
              )}
            </div>

            <div className="input-section">
              <div>
                <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              </div>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Repeat password"
                onChange={(e) => {
                  setError("");
                  setPayload({ ...payload, confirmPassword: e.target.value });
                }}
              />
              {empty && !payload.confirmPassword && (
                <div className="error">Field is required</div>
              )}
            </div>
            {error && <div className="error">{error}</div>}

            <div className="button-section">
              <button
                disabled={operation.pending}
                onClick={(e) => {
                  e.preventDefault();
                  handleValidation();
                  // setOtpSent(true);
                }}
              >
                {operation.pending ? Loader("info", "sm") : "Confirm"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="banner-section">
        <center className="logo-section">
          <h5>Eventbux</h5>
        </center>

        <div className="welcome-section">
          <center>
            <p className="welcome bg-dark">Reinvent Password 🔐 </p>
            {/* <p
            className="note text-light pointer"
            onClick={() => navigate("/auth/login")}
          >
            Sign In to stay connected.
          </p>

          <div className="button-section">
            <button onClick={() => navigate("/auth/login")}>Sign In</button>
          </div> */}
          </center>
        </div>

        <center className="copyright">Copyright © 2023</center>
      </div>
    </div>
  );
}
