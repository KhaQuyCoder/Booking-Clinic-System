import React, { useEffect, useState } from "react";
import { FaFileAlt, FaCheckCircle} from "react-icons/fa";
import doctorData from '../../../data/Browsedoctor.json';
import { Commontable } from "../../table/Commontable";
import { FaCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Listbrowsedoctor() {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setDoctors(doctorData);
    }, []);
    const handleReview = (doctor) => {
        navigate(`/duyet-bac-si/thong-tin-bac-si/${doctor.id}`, {state : {doctor}});
    };
    const handleApprove = (id) => {
        setDoctors((oldDoctors) => oldDoctors.filter((doctor) => doctor.id !== id));
    };
    const handleReject = (id) => {
        setDoctors((oldDoctors) => oldDoctors.filter((doctor) => doctor.id !== id));
    };
    const columnsDoctor = [
        { name: "ID bác sĩ", key: 'id' },
        { name: "Tên bác sĩ", key: 'name' },
        { name: "Phòng khám", key: 'clinic' },
        { name: "Vai trò", key: 'role' },
        { name: "Thời gian gửi", key: 'timesent' }
    ];
    const actions = [
        (doctor) => <FaFileAlt title="Xem chi tiết" className="iconf" onClick={() => handleReview(doctor)} />,
        (doctor) => <FaCheckCircle title="Duyệt" className="iconf" onClick={() => handleApprove(doctor.id)}/>,
        (doctor) => <FaCircleXmark title="Từ chối" className="iconf" onClick={() => handleReject(doctor.id)}/>,
    ];
    return (
        <div>
            <Commontable columns={columnsDoctor} data={doctors} actions={actions} />
        </div>
    );
}
export {Listbrowsedoctor};