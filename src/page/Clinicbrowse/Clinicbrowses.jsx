import React from "react";
import { Listbrowseclinic } from "./Listbrowseclinic";
import './Clinicbrowses.css';
import { Filterclinic } from "./Filterclinic";
import { Clinicpage } from "./Clinicpage";

function Clinicbrowses() {
    return (
        <div className="clinicbrowses">
            <h2>DANH SÁCH CHỜ DUYỆT</h2>
            <Filterclinic />
            <Listbrowseclinic />
            <Clinicpage />
        </div>
    );
}
export { Clinicbrowses };