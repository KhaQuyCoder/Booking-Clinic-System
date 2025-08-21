// src/context/PatientContext.js
import React, { createContext, useState } from "react";
import patientsData from "../data/detailPatient.json";

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState(patientsData);

  const updatePatient = (updatedPatient) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === updatedPatient.id ? updatedPatient : p))
    );
  };

  return (
    <PatientContext.Provider value={{ patients, updatePatient }}>
      {children}
    </PatientContext.Provider>
  );
};
