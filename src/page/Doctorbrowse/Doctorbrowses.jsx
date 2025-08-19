import React from "react";
import { Filterclinic } from "../Clinicbrowse/Filterclinic";
import { Listbrowsedoctor } from "./Listbrowsedoctor";
import { Clinicpage } from "../Clinicbrowse/Clinicpage";

function Doctorbrowses() {
    return (
        <div className="clinicbrowses">
            <h2>DANH SÁCH CHỜ DUYỆT</h2>
            <Filterclinic />
            <Listbrowsedoctor />
            <Clinicpage />
        </div>
    );
}
export {Doctorbrowses};