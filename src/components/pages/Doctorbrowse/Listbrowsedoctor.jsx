import React, { useEffect, useState } from "react";
import { FaFileAlt, FaCheckCircle} from "react-icons/fa";
import doctorData from '../../../data/Browsedoctor.json';
// import './Listbrowsedoctor.css';
import { Commontable } from "../../table/Commontable";
import { FaCircleXmark } from "react-icons/fa6";

function Listbrowsedoctor() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        setDoctors(doctorData);
    }, []);
    console.log("doctors: ", doctors);
    console.log("typeof doctor: ", typeof doctors);
    console.log("doctorData =", doctorData);
    console.log("Array.isArray(doctorData) =", Array.isArray(doctorData));
    const columnsDoctor = [
        { name: "ID bác sĩ", key: 'iddoctor' },
        { name: "Tên bác sĩ", key: 'name' },
        { name: "Phòng khám", key: 'clinic' },
        { name: "Vai trò", key: 'role' },
        { name: "Thời gian gửi", key: 'timesent' }
    ];
    const actions = [
        <FaFileAlt className="iconf" />,
        <FaCheckCircle className="iconf" />,
        <FaCircleXmark className="iconf" />,
    ];
    return (
        <div>
            <Commontable columns={columnsDoctor} data={doctors} actions={actions} />
        </div>
    );
}
export {Listbrowsedoctor};