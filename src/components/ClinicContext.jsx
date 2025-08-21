import React, { createContext, useContext, useState } from "react";
import clinicData from '../data/Browseclinic.json';

const ClinicContext =  createContext();

export const ClinicProvider = ({ children }) => {
    const [clinics, setClinics] = useState(clinicData);
    
    const approveClinic = (id) => {
        setClinics((old) => old.filter((clinic) => clinic.id !== id));
    };

    const rejectClinic = (id) => {
        setClinics((old) => old.filter((clinic) => clinic.id !== id));
    };

    return (
        <ClinicContext.Provider value={{ clinics, approveClinic, rejectClinic}}>{children}</ClinicContext.Provider>
    );
};
export const useClinics = () => useContext(ClinicContext);