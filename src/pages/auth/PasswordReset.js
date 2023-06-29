import "../../styles/signup/signup.scss"; 
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { variableManager } from "../../contexts/VariablesContext"; 
import { Loader } from "../../common/Loader";

export default function PasswordReset() {
  const { operation, setOperation, handleSendCode, setUser } =
    useContext(variableManager);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (email) {
      // localStorage.setItem("resetEmail", email);
      const { data, error } = await handleSendCode({ email: email });
      if (data) {
        // setUser(data);
        setOperation({ ...operation, from: "forgotPassword" });
        navigate(`/auth/verify?email=${data.email}`);
      } else {
        console.log(error);
      }
    } else {
      setError("Please enter your email");
    }
  }



  return (
    <div className="signup-container">
      <div className="form-section">
        <div className="content">
          <center>
            <h4>Account Password Reset</h4>
          </center>

          <p className="note text-center">
            Kindly verify your registered email address to reset your password.
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
                onChange={(e) => {
                  setError("");
                  setEmail(e.target.value);
                }}
              />
              {error && <div className="error">{error}</div>}
            </div>

            <div className="button-section">
              <button
                disabled={operation.pending}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                {operation.pending ? Loader("info", "sm") : "Send Code"}
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
