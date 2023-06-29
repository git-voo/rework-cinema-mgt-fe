import { useContext, useEffect, useState } from "react";
import "../styles/components/otpform.scss";
import { variableManager } from "../contexts/VariablesContext";

export default function OTPForm() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const { setCode, } = useContext(variableManager);

  useEffect(() => {
    setCode(otp.join("")); 
    return () => {
      setCode("");
    };
  }, [otp]);
  

  function handleChange(e, index) { 
    if (isNaN(e.value)) return false;
    setOtp([...otp.map((data, i) => (i === index ? e.value : data))]);

    if (e.nextSibling) e.nextSibling.focus();
  }

  function handleDelete(e, index) {
    if (e.key === "Backspace" && e.target.previousSibling) {
      e.preventDefault();
      e.target.previousSibling.focus();

      setOtp([...otp.map((data, i) => (i !== index ? data : ""))]);
    } else if (
      e.key === "Backspace" &&
      !e.target.previousSibling &&
      e.target.nextSibling
    ) {
      e.preventDefault();
      setOtp([...otp.map((data, i) => (i !== index ? data : ""))]);
    }
  }

  function handlePaste(e) {
    const value = e.clipboardData.getData("text");
    if (isNaN(value)) return false;
    const updatedValue = value.toString().split("").slice(0, otp.length);
    setOtp(updatedValue);

    const focusedInput = e.target.parentNode.querySelector("input:focus");
    if (focusedInput) {
      focusedInput.blur();
    }

    const lastInput = e.target.parentNode.querySelector(
      'input[type="password"]:last-child'
    );
    if (lastInput) {
      lastInput.focus();
    }
  }

  return (
    <div className="">
      <div className="otp-container">
        {otp.map((data, i) => {
          return (
            <input
              type="text"
              value={data}
              maxLength={1}
              key={i}
              onChange={(e) => handleChange(e.target, i)}
              onKeyDown={(e) => {
                handleDelete(e, i);
              }}
              onPaste={(e) => {
                handlePaste(e);
              }}
            />
          );
        })}
      </div>
      {/* <div className="button-section mt-4">
        <button
        onClick={()=>alert(otp.join(""))}
        >Verify</button>
      </div> */}
    </div>
  );
}
