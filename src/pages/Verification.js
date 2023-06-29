import { useLocation, useNavigate } from "react-router-dom";
import OTPForm from "../components/OTPForm";
import { useContext, useEffect, useState } from "react";
import { variableManager } from "../contexts/VariablesContext";
import { Loader } from "../common/Loader";
import { verifyEmail } from "../services/VerifyEmail";
import CountDown from "../utils/Countdown";

export default function Verification() {
  const navigate = useNavigate();
  const { code, operation, user, setUser, handleSendCode } =
    useContext(variableManager);
  const [error, setError] = useState(""); 
  const [allowResend, setAllowResend] = useState(false);


  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const resetEmail = searchParams.get("email")

  useEffect(() => {
    const localUser = localStorage.getItem("primeUser");
    setUser(JSON.parse(localUser));
    return () => {
      const localUser = localStorage.getItem("primeuser");
      setUser(JSON.parse(localUser));
    };
  }, []);

  async function handleSubmit(payload) {
    const { data, error } = await verifyEmail(payload); 
    if (data) {
      if (operation.from !== "forgotPassword") {
        navigate("/user/dashboard");
      } else {
        navigate(`/auth/new-password?email=${data.email}`);
      }
    }
  }

  function handleValidation() {
    if (code.length === 6) {
      handleSubmit({
        email: resetEmail || user?.email,
        verificationCode: code,
      });
    } else {
      setError("Invalid OTP, OTP must be 6 digits");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }

  return (
    <div className="verification-container signup-container form-section">
      <div className="form-section">
        <div className="content">
          <center>
            <h4>Verification Code</h4>
            <p className="note  pointer">
              Enter the 6-digit verification code sent to your email.
            </p>
          </center>

          <center>
            <OTPForm callBack={handleValidation}/>
          </center>

          {error && <div className="error">{error}</div>}

          <div className="button-section mt-2">
            <button onClick={() => handleValidation()}>
              {operation.pending ? Loader("info", "sm") : "Verify"}
            </button>
          </div>

          {operation.from !== "forgotPassword" && (
            <div className="button-section mt-2 for-mobile">
              <button
                className="bg-light text-info"
                onClick={() => {
                  const skipConfirmation = window.confirm(
                    "if you skip this step you may be asked to do it later. Skip?"
                  );
                  if (skipConfirmation) {
                    navigate("/user/dashboard");
                  }
                }}
              >
                Skip
              </button>
            </div>
          )}

          <center className="note ">
            Didn't get code? &nbsp;
            {allowResend ? (
              <span
                className="text-info fw-bold pointer"
                onClick={() => {
                  handleSendCode(user.email);
                }}
              >
                Resend
              </span>
            ) : (
              <>
                <span
                  className="text-grey fw-bold disabled"
                  onClick={() => {
                    handleSendCode(user.email);
                  }}
                >
                  Resend in &nbsp;
                </span>

                {
                  <span className="text-info">
                    <CountDown
                      from={60}
                      onComplete={() => setAllowResend(true)}
                    />
                  </span>
                }
              </>
            )}
          </center>
        </div>
      </div>

      <div className="banner-section">
        <center className="logo-section">
          <h5>Eventbux</h5>
        </center>

        <div className="welcome-section">
          {operation.from !== "forgotPassword" ? (
            <center>
              <p className="welcome">Email Verification</p>
              <p
                className="note text-light pointer bg-dark"
                onClick={() => navigate("/user/dashboard")}
              >
                Skip verification? you'd be prompted to do this later
              </p>

              <div className="button-section">
                <button onClick={() => navigate("/user/dashboard")}>
                  Skip
                </button>
              </div>
            </center>
          ) : (
            <center>
              <p className="welcome bg-dark">Recover Password</p>
              {/* <p
              className="note text-light pointer bg-dark"
              onClick={() => navigate("/user/dashboard")}
            >
              Skip verification? you'd be prompted to do this later
            </p>

            <div className="button-section">
              <button onClick={() => navigate("/user/dashboard")}>Skip</button>
            </div> */}
            </center>
          )}
        </div>

        <center className="copyright">Copyright © 2023</center>
      </div>
    </div>
  );
}
