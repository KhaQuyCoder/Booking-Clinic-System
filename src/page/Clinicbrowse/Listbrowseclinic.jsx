import React from "react";
import { FaFileAlt, FaCheckCircle } from "react-icons/fa";
import './Listbrowseclinic.css';
import { Commontable } from "../../components/table/Commontable";
import { FaCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useCommon } from "../../components/CommonContext";

function Listbrowseclinic() {
    const navigate = useNavigate();
    const {clinics, approveClinic, rejectClinic} = useCommon();

    const handleApprove = (id) => {
        approveClinic(id);
    };
    const handleReject = (id) => {
        const confirmDelete = window.confirm("Bạn có chắc muốn từ chối phòng khám này?");
        if (confirmDelete) {
            rejectClinic(id);
        }
    };
    const handleReview = (clinic) => {
        navigate(`/duyet-phong-kham/thong-tin-phong-kham/${clinic.id}`, { state: { clinic } });
    };

    const columnsClinic = [
        { name: "ID phòng khám", key: 'id' },
        { name: "Tên phòng khám", key: 'name' },
        { name: "Loại hình phòng khám", key: 'type' },
        { name: "Vai trò", key: 'role' },
        { name: "Thời gian gửi", key: 'timesent' },
    ];
    const actions = [
        (clinic) => <FaFileAlt title="Xem chi tiết" className="iconf" onClick={() => handleReview(clinic)} />,
        (clinic) => <FaCheckCircle title="Duyệt" className="iconf" onClick={() => handleApprove(clinic.id)} />,
        (clinic) => <FaCircleXmark title="Từ chối" className="iconf" onClick={() => handleReject(clinic.id)} />,
    ];
    return (
        <div>
            <Commontable columns={columnsClinic} data={clinics} actions={actions} />
        </div>
    );
}
export { Listbrowseclinic };