import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

function Detailinforclinic() {
    const location = useLocation();
    const navigate = useNavigate();
    const clinic = location.state || {};
    
    if(!clinic.id) {
        return <div>Không có dữ liệu phòng khám. <button onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button></div>
    }

    return (
        <div className="detailinforclinic">
            <div className="detailinfor">Thông tin chung</div>
            <div className="detailrow">
                <p><span>ID phòng khám:</span> {clinic.id}</p>
                <p><span>Tên phòng khám:</span> {clinic.name} </p>
                <p><span>Loại hình phòng khám:</span> {clinic.type} </p>
                <p><span>Địa chỉ cụ thể:</span> {clinic.address} </p>
            </div>
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
                <p><span>Mô tả:</span> {clinic.describe || "N/A"} </p>
            </div>
            <div className="detailrow">
                <p><span>Giờ hoạt động:</span> {clinic.hoursofopera || "N/A"} </p>
            </div>
            <div className="detailinfor">Thông tin về giấy phép hoạt động</div>
            <div className="detailrow">
                <p><span>Số giấy phép:</span> {clinic.licensenumber}</p>
                <p><span>ngày cấp:</span> {clinic.dateofissue} </p>
                <p><span>Nơi cấp:</span> {clinic.placeofissue} </p>
                <p><span>Tệp đính kèm:</span> </p>
                <p><span>Tên người đại diện:</span> {clinic.representname} </p>
                <p><span>Số điện thoại cá nhân:</span> {clinic.personphone} </p>
                <p><span>Tên tài khoản/ Email quản trị:</span> {clinic.accountname} </p>
            </div>
            <div className="interact">
                <button onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button>
                <button><FaCheckCircle /> Duyệt</button>
                <button><FaCircleXmark /> Từ chối</button>
            </div>
        </div>
    );
}
export {Detailinforclinic};