import React from "react";
import { Route, Routes } from "react-router-dom";
import { Clinicbrowses } from "../components/pages/Clinicbrowse/Clinicbrowses";
import { Detailclinicbrowse } from "../components/pages/Detailclinicbrowse/Detailclinicbrowse";
import { Doctorbrowses } from "../components/pages/Doctorbrowse/Doctorbrowses";
import { Clinicmanagers } from "../components/pages/Clinicmanager/Clinicmanagers";
import { Alllistpackages } from "../components/pages/packages/listpackage/Alllistpackages";
import { Detaildoctor } from "../components/pages/Detaildoctor/Detaildoctor";
import { Detailinformanager } from "../components/pages/Detailmanager/Detailinformanager";
import { Createpackage } from "../components/pages/packages/createpackage/Createpackage";
import { Fixclinic } from "../components/pages/Fixclinic/Fixclinic";
import { Detailpackage } from "../components/pages/packages/Detailpackage/Detailpackage";
import { Fixpackage } from "../components/pages/packages/Fixpackage/Fixpackage";

function Routing() {
    return (
        <Routes>
            <Route path="/account/userprofile" element={<div>userprofile</div>} />
            <Route path="/duyet-phong-kham" element={<Clinicbrowses />} />
            <Route path="/duyet-phong-kham/thong-tin-phong-kham/:id" element={<Detailclinicbrowse />} />
            <Route path="/duyet-bac-si" element={<Doctorbrowses />} />
            <Route path="/duyet-bac-si/thong-tin-bac-si/:id" element ={<Detaildoctor />} />
            <Route path="/quan-ly-phong-kham" element={<Clinicmanagers />} />
            <Route path="/quan-ly-phong-kham/thong-tin-phong-kham/:id" element={<Detailinformanager />} />
            <Route path="/quan-ly-phong-kham/sua-thong-tin-phong-kham/:id" element= {<Fixclinic />} />
            <Route path="/quan-ly-goi/tao-goi" element={<Createpackage />} />
            <Route path="/quan-ly-goi/danh-sach-goi" element={<Alllistpackages />} />
            <Route path="/quan-ly-goi/danh-sach-goi/thong-tin-goi/:id" element= {<Detailpackage />} />
            <Route path="/quan-ly-goi/danh-sach-goi/sua-thong-tin-goi/:id" element= {<Fixpackage />} />
            <Route path="/thong-ke-bao-cao/tong-quan" element={<div>Overview Statistics</div>} />
            <Route path="/thong-ke-bao-cao/thong-ke-doanh-thu" element={<div>Revenue Statistics</div>} />
            <Route element={<div>AuthLayout</div>}>
                <Route path="/doi-mat-khau" element={<div>Change Password</div>} />
                <Route path="/account/login" element={<div>Login</div>} />
            </Route>
        </Routes>
    );
}
export {Routing};