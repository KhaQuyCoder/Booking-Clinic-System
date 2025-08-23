
import React, { createContext, useContext, useState } from "react";
import clinicData from '../data/Browseclinic.json';
import doctorData from '../data/Browsedoctor.json';
import packagesData from '../data/Packagelist.json';
import userData from '../data/Userprofile.json';

const CommonContext = createContext();

export const CommonProvider = ({children}) => {
    const [clinics, setClinics] = useState(clinicData);
    const [doctors, setDoctors] = useState(doctorData);
    const [packages, setPackages] = useState(packagesData);
    const [user, setUser] = useState(userData);

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

    const updateUser = (newData) => {
        setUser((old) => ({ ...old, ...newData }));
    };

    return (
        <CommonContext.Provider value={{clinics, doctors, packages, user, updateUser, approveClinic, approveDoctor, rejectClinic, rejectDoctor, rejectPackage}}>{children}</CommonContext.Provider>
    );
};
export const useCommon = () => useContext(CommonContext);
