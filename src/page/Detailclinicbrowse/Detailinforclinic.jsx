import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import './Detailinforclinic.css';
import { useCommon } from "../../components/CommonContext";

function Detailinforclinic() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { clinics, approveClinic, rejectClinic } = useCommon();

    const [clinic, setClinic] = useState(location.state?.clinic || null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!clinic) {
            setLoading(true);
            const found = clinics.find(c => String(c.id) === String(id));
            if (found) {
                setClinic(found);
            }
            setLoading(false);
        }
    }, [clinic, id, clinics]);
    const onApprove = () => {
        approveClinic(clinic.id);
        navigate(-1);
    };
    const onReject = () => {
        const confirmDelete = window.confirm("Bạn có chắc muốn từ chối phòng khám này?");
        if (confirmDelete) {
            rejectClinic(clinic.id);
            navigate(-1);
        }
    };

    if (loading) return <div>Đang load...</div>;

    if (!clinic) {
        return (
            <div>Không có dữ liệu phòng khám.<button onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button></div>
        );
    }

    return (
        <div className="detailinforclinic">
            <div className="detailcolumn">
                <div className="linfodetair">Thông tin chung</div>
                <p><span>ID phòng khám:</span> {clinic.id}</p>
                <p><span>Tên phòng khám:</span> {clinic.name} </p>
                <p><span>Loại hình phòng khám:</span> {clinic.type} </p>
                <p><span>Địa chỉ cụ thể:</span> {clinic.address} </p>
                <div className="detailrow">
                    <p><span>Xã/ Phường:</span> {clinic.commune} </p>
                    <p><span>Tỉnh/ Thành phố trực thuộc trung ương:</span> {clinic.conscious} </p>
                </div>
                <div className="detailrow">
                    <p><span>Số điện thoại:</span> {clinic.phone} </p>
                    <p><span>Email:</span> {clinic.email} </p>
                </div>
                <div className="detailrow">
                    <p><span>Ngày thành lập:</span> {clinic.dateofestablish} </p>
                    <p><span>Giờ hoạt động:</span> {clinic.hoursofopera || "N/A"} </p>
                </div>
                <div className="detailrow">
                    <p><span>Mô tả:</span> {clinic.describe || "N/A"} </p>
                </div>
            </div>
            <div className="detailcolumn">
                <div className="detailinfor">Thông tin về giấy phép hoạt động</div>
                <p><span>Số giấy phép:</span> {clinic.licensenumber}</p>
                <p><span>ngày cấp:</span> {clinic.dateofissue} </p>
                <p><span>Nơi cấp:</span> {clinic.placeofissue} </p>
                <p><span>Tệp đính kèm:</span> </p>
                <p><span>Tên người đại diện:</span> {clinic.representname} </p>
                <p><span>Số điện thoại cá nhân:</span> {clinic.personphone} </p>
                <p><span>Tên tài khoản/ Email quản trị:</span> {clinic.accountname} </p>
            </div>
            <div className="interacts">
                <button className="interact" onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button>
                <button className="interact" onClick={onApprove}><FaCheckCircle color="#2ecc71" /> Duyệt</button>
                <button className="interact" onClick={onReject}><FaCircleXmark color="#D72638" /> Từ chối</button>
            </div>
        </div>
    );
}
export { Detailinforclinic };
