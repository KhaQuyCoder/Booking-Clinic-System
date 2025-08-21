import React from "react";
import { FaFileAlt, FaTrashAlt, FaWrench } from "react-icons/fa";
import { Commontable } from "../../components/table/Commontable";
import { useNavigate } from "react-router-dom";
import { useCommon } from "../../components/CommonContext";
function Listclinicmanager() {
    const navigate = useNavigate();
    const { clinics, rejectClinic } = useCommon();
    const handleReject = (id) => {
        const confirmDelete = window.confirm("Bạn có chắc muốn xóa phòng khám này?");
        if (confirmDelete) {
            rejectClinic(id);
        }
    };
    const handleReview = (clinic) => {
        navigate(`/quan-ly-phong-kham/thong-tin-phong-kham/${clinic.id}`, { state: { clinic } });
    }
    const handleFix = (clinic) => {
        navigate(`/quan-ly-phong-kham/sua-thong-tin-phong-kham/${clinic.id}`, { state: { clinic } });
    }
    const columnsManager = [
        { name: "ID phòng khám", key: 'id' },
        { name: "Tên phòng khám", key: 'name' },
        { name: "Loại hình phòng khám", key: 'type' },
        { name: "Số điện thoại", key: 'phone' },
        { name: "Địa chỉ cụ thể", key: 'address' },
    ];
    const actions = [
        (clinic) => <FaFileAlt title="Xem chi tiết" className="iconf" onClick={() => handleReview(clinic)} />,
        (clinic) => <FaWrench title="Sửa thông tin" className="iconf" onClick={() => handleFix(clinic)} />,
        (clinic) => <FaTrashAlt title="Xóa phòng khám" className="iconf" onClick={() => handleReject(clinic.id)} />
    ];
    return (
        <div>
            <Commontable columns={columnsManager} data={clinics} actions={actions} />
        </div>
    );
}
export { Listclinicmanager };