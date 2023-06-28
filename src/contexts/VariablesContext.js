import { createContext, useState } from "react";

export const variableManager = createContext();

export default function VariablesContext({ children }) {
  const [operation, setOperation] = useState({
    pending: false,
    error: "",
    success: "",
  });

  const exportData = {
    operation,
    setOperation,
  };

  return (
    <variableManager.Provider value={exportData}>
      {children}
    </variableManager.Provider>
  );
}
