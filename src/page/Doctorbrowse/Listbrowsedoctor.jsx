import React from "react";
import { FaFileAlt, FaCheckCircle } from "react-icons/fa";
import { Commontable } from "../../components/table/Commontable";
import { FaCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useCommon } from "../../components/CommonContext";

function Listbrowsedoctor() {
    const {doctors, approveDoctor, rejectDoctor} = useCommon();
    const navigate = useNavigate();
    const handleReview = (doctor) => {
        navigate(`/duyet-bac-si/thong-tin-bac-si/${doctor.id}`, { state: { doctor } });
    };
    const handleApprove = (id) => {
        approveDoctor(id);
    };
    const handleReject = (id) => {
        const confirmDelete = window.confirm("Bạn có chắc muốn từ chối bác sĩ này?");
        if (confirmDelete) {
            rejectDoctor(id);
        }
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
        (doctor) => <FaCheckCircle title="Duyệt" className="iconf" onClick={() => handleApprove(doctor.id)} />,
        (doctor) => <FaCircleXmark title="Từ chối" className="iconf" onClick={() => handleReject(doctor.id)} />,
    ];
    return (
        <div>
            <Commontable columns={columnsDoctor} data={doctors} actions={actions} />
        </div>
    );
}
export { Listbrowsedoctor };