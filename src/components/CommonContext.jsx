import React, { createContext, useContext, useState } from "react";
import clinicData from '../data/Browseclinic.json';
import doctorData from '../data/Browsedoctor.json';
import packagesData from '../data/Packagelist.json';

const CommonContext = createContext();

export const CommonProvider = ({children}) => {
    const [clinics, setClinics] = useState(clinicData);
    const [doctors, setDoctors] = useState(doctorData);
    const [packages, setPackages] = useState(packagesData);

    const approveClinic = (id) => {
        setClinics((old) => old.filter((clinic) => clinic.id !== id));
    };

    const rejectClinic = (id) => {
        setClinics((old) => old.filter((clinic) => clinic.id !== id));
    };

    const approveDoctor = (id) => {
        setDoctors((old) => old.filter((doctor) => doctor.id !== id));
    };

    const rejectDoctor = (id) => {
        setDoctors((old) => old.filter((doctor) => doctor.id !== id));
    };

    const rejectPackage = (id) => {
        setPackages((old) => old.filter((packagess) => packagess.id !== id));
    };

    return (
        <CommonContext.Provider value={{clinics, doctors, packages, approveClinic, approveDoctor, rejectClinic, rejectDoctor, rejectPackage}}>{children}</CommonContext.Provider>
    );
};
export const useCommon = () => useContext(CommonContext);
