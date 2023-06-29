import { createContext, useEffect, useState } from "react";
import { validateEmail } from "../services/ValidateEmail";

export const variableManager = createContext();

export default function VariablesContext({ children }) {
  const [operation, setOperation] = useState({
    pending: false,
    error: "",
    success: "",
    from:"",
  });

  const [code, setCode] = useState(""); 
  const [user, setUser] = useState("");

  const exportData = {
    operation,
    setOperation,
    code,
    setCode,
    user,
    setUser,
    handleSendCode,
  }; 

  useEffect(() => { 
    const localUser = localStorage.getItem("primeUser");
    setUser(JSON.parse(localUser));
    return () => {
      const localUser = localStorage.getItem("primeuser");
      setUser(JSON.parse(localUser));
    };
  }, []);







async function handleSendCode(email){
  const {data, error} = await validateEmail(email)
  return {data, error}

}


  return (
    <variableManager.Provider value={exportData}>
      {children}
    </variableManager.Provider>
  );
}
