import { useState } from "react";
import { createContext } from "react";

export const State = createContext();

const Context = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [resetPage, setResetPage] = useState(true);
  const [valueText, setValueText] = useState("");

  return (
    <State.Provider
      value={{
        loading,
        setLoading,
        resetPage,
        setResetPage,
        valueText,
        setValueText,
      }}
    >
      {children}
    </State.Provider>
  );
};

export default Context;
