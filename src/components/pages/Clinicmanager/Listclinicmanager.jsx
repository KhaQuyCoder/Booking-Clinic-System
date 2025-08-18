import React, { useEffect, useState } from "react";
import managerData from '../../../data/Browseclinic.json';
import { FaFileAlt, FaTrashAlt, FaWrench } from "react-icons/fa";
import { Commontable } from "../../table/Commontable";
import { useNavigate } from "react-router-dom";
function Listclinicmanager() {
    const [managers, setManagers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setManagers(managerData);
    }, []);
    const handleReject = (id) => {
        setManagers((oldManagers) => oldManagers.filter((manager) => manager.id !== id));
    };
    const handleReview = (manager) => {
        navigate(`/quan-ly-phong-kham/thong-tin-phong-kham/${manager.id}`,{state: {manager}});
    }
    const handleFix = (manager) => {
        navigate(`/quan-ly-phong-kham/sua-thong-tin-phong-kham/${manager.id}`,{state: {manager}});
    }
    const columnsManager = [
        {name: "ID phòng khám", key: 'id'},
        {name: "Tên phòng khám", key: 'name'},
        {name: "Loại hình phòng khám", key: 'type'},
        {name: "Số điện thoại", key: 'phone'},
        {name: "Địa chỉ cụ thể", key: 'address'},
    ];
    const actions = [
        (manager) => <FaFileAlt title="Xem chi tiết" className="iconf" onClick={() => handleReview(manager)}/>,
        (manager) => <FaWrench title="Sửa thông tin" className="iconf" onClick={() => handleFix(manager)}/>,
        (manager) => <FaTrashAlt title="Xóa phòng khám" className="iconf" onClick={() => handleReject(manager.id)} />
    ];
    return(
        <div>
            <Commontable columns={columnsManager} data={managers} actions={actions} />
        </div>
    );
}
export {Listclinicmanager};