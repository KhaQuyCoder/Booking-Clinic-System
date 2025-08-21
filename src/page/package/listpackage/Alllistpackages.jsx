import React from "react";
import { Filterclinic } from "../../Clinicbrowse/Filterclinic";
import { Listpackages } from "./Listpackages";
import { Clinicpage } from "../../Clinicbrowse/Clinicpage";

function Alllistpackages() {
    return (
        <div className="clinicbrowses">
            <h2>DANH SÁCH GÓI ĐĂNG KÝ</h2>
            <Filterclinic />
            <Listpackages />
            <Clinicpage />
        </div>
    );
}
export {Alllistpackages};