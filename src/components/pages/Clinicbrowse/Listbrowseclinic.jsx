import React, { useEffect, useState } from "react";
import { FaFileAlt, FaCheckCircle } from "react-icons/fa";
import clinicData from '../../../data/Browseclinic.json';
import './Listbrowseclinic.css';
import { Commontable } from "../../table/Commontable";
import { FaCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Listbrowseclinic() {
    const [clinics, setClinics] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setClinics(clinicData);
    }, []);
    const handleReview = (clinic) => {
        navigate(`/duyet-phong-kham/thong-tin-phong-kham/${clinic.id}`, { state : {clinic}});
    };

    const columnsClinic = [
        { name: "ID phòng khám", key: 'id' },
        { name: "Tên phòng khám", key: 'name' },
        { name: "Loại hình phòng khám", key: 'type' },
        { name: "Vai trò", key: 'role' },
        { name: "Thời gian gửi", key: 'timesent' } 
    ];
    const actions = [
        (clinic) => <FaFileAlt title="Xem chi tiết" className="iconf" onClick={() => handleReview(clinic)} />,
        (clinic) => <FaCheckCircle title="Duyệt" className="iconf" onClick={() => console.log('Duyệt', clinic.id)} />,
        (clinic) => <FaCircleXmark title="Từ chối" className="iconf" onClick={() => console.log('Từ chối', clinic.id)} />,
    ];
    return (
        <div>
            <Commontable columns={columnsClinic} data={clinics} actions={actions} />
        </div>
    );
}
export { Listbrowseclinic };