import React from "react";
import { Filterclinic } from "../Clinicbrowse/Filterclinic";
import { Listclinicmanager } from "./Listclinicmanager";
import { Clinicpage } from "../Clinicbrowse/Clinicpage";

function Clinicmanagers(){
    return(
        <div className="clinicbrowses">
            <h2>DANH SÁCH CÁC PHÒNG KHÁM</h2>
            <Filterclinic />
            <Listclinicmanager />
            <Clinicpage />
        </div>
    );
}
export {Clinicmanagers};