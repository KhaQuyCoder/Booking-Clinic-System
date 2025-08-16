import React, { useState } from "react";
import { createContext } from "react";

export const State = createContext();

const Context = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [resetPage, setResetPage] = useState(true);

  return (
    <State.Provider value={{ loading, setLoading, resetPage, setResetPage }}>
      {children}
    </State.Provider>
  );
};

export default Context;
