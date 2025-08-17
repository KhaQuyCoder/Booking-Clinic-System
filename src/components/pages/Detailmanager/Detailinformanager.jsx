import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaTrashAlt, FaWrench } from "react-icons/fa";
import clinicData from '../../../data/Browseclinic.json';
import './Detailinformanager.css';

function Detailinformanager() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    const [manager, setManager] = useState(location.state?.manager || null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!manager) {
            setLoading(true);
            const found = clinicData.find(c => String(c.id) === String(id));
            if (found) {
                setManager(found);
            }
            setLoading(false);
        }
    }, [manager, id]);

    const handleFix = (manager) => {
        navigate(`/quan-ly-phong-kham/sua-thong-tin-phong-kham/${manager.id}`, {state: {manager}});
    }
    if (loading) return <div>Đang load...</div>;

    if (!manager) {
        return (
            <div>Không có dữ liệu phòng khám.<button onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button></div>
        );
    }

    return (
        <div className="detailinformanager">
            <div className="detailcolumn">
                <div>Thông tin chung</div>
                <p><span>ID phòng khám:</span> {manager.id}</p>
                <p><span>Tên phòng khám:</span> {manager.name} </p>
                <p><span>Loại hình phòng khám:</span> {manager.type} </p>
                <p><span>Địa chỉ cụ thể:</span> {manager.address} </p>
                <div className="detailrow">
                    <p><span>Xã/ Phường:</span> {manager.commune} </p>
                    <p><span>Tỉnh/ Thành phố trực thuộc trung ương:</span> {manager.conscious} </p>
                </div>
                <div className="detailrow">
                    <p><span>Số điện thoại:</span> {manager.phone} </p>
                    <p><span>Email:</span> {manager.email} </p>
                </div>
                <div className="detailrow">
                    <p><span>Ngày thành lập:</span> {manager.dateofestablish} </p>
                    <p><span>Giờ hoạt động:</span> {manager.hoursofopera || "N/A"} </p>
                </div>
                <div className="detailrow">
                    <p><span>Mô tả:</span> {manager.describe || "N/A"} </p>
                </div>
            </div>
            <div className="detailcolumn">
                <div>Thông tin về giấy phép hoạt động</div>
                <p><span>Số giấy phép:</span> {manager.licensenumber}</p>
                <p><span>ngày cấp:</span> {manager.dateofissue} </p>
                <p><span>Nơi cấp:</span> {manager.placeofissue} </p>
                <p><span>Tệp đính kèm:</span> </p>
                <p><span>Tên người đại diện:</span> {manager.representname} </p>
                <p><span>Số điện thoại cá nhân:</span> {manager.personphone} </p>
                <p><span>Tên tài khoản/ Email quản trị:</span> {manager.accountname} </p>
            </div>
            <div className="interacts">
                <button className="interact" onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button>
                <button className="interact" onClick={() => handleFix(manager)}><FaWrench color="#2ecc71"/> Sửa</button>
                <button className="interact"><FaTrashAlt color="#D72638"/> Xóa</button>
            </div>
        </div>
    );
}
export { Detailinformanager };