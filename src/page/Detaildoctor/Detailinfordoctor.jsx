import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import './Detailinfordoctor.css';
import { useCommon } from "../../components/CommonContext";

function Detailinfordoctor(){
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const {doctors, approveDoctor, rejectDoctor} = useCommon();

    const [doctor, setDoctor] = useState(location.state?.doctor || null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!doctor) {
            setLoading(true);
            const found = doctors.find(c => String(c.id) === String(id));
            if(found) {
                setDoctor(found);
            }
        }
        setLoading(false);
    }, [doctor, id, doctors]);
    const onApprove = () => {
        approveDoctor(doctor.id);
        navigate(-1);
    };
    const onReject = () => {
        const confirmDelete = window.confirm("Bạn có chắc muốn từ chối bác sĩ này?");
        if (confirmDelete) {
            rejectDoctor(doctor.id);
            navigate(-1);
        }
    };

    if (loading) return <div>Đang load...</div>;

    if(!doctor) {
        return (
            <div>Không có dữ liệu bác sĩ.<button onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button></div>
        )
    }

    return (
            <div className="detailinfordoctor">
                <div className="detailcolumn">
                    <div className="linfodetair">Thông tin chung</div>
                    <p><span>ID bác sĩ:</span> {doctor.id}</p>
                    <div className="detailrow">
                        <p><span>Tên bác sĩ:</span> {doctor.name} </p>
                        <p><span>Giới tính:</span> {doctor.gender} </p>
                    </div>
                    <div className="detailrow">
                        <p><span>Ngày sinh:</span> {doctor.dateofbirth} </p>
                        <p><span>Nơi sinh:</span> {doctor.placeofbirth} </p>
                    </div>
                    <div className="detailrow">
                        <p><span>Quốc tịch:</span> {doctor.nation} </p>
                        <p><span>Dân tộc:</span> {doctor.ethnicity} </p>
                    </div>
                    <div className="detailrow">
                        <p><span>Số CCCD:</span> {doctor.idnumber} </p>
                        <p><span>Tôn giáo:</span> {doctor.religion} </p>
                    </div>
                    <div className="detailrow">
                        <p><span>Ngày cấp CCCD:</span> {doctor.dateofid} </p>
                        <p><span>Nơi cấp CCCD:</span> {doctor.placeofid} </p>
                    </div>
                    <div className="detailrow">
                        <p><span>Số điện thoại:</span> {doctor.phone} </p>
                        <p><span>Email:</span> {doctor.email} </p>
                    </div>
                </div>
                <div className="detailcolumn">
                    <div className="detailinfor">Thông tin về quê quán, hộ khẩu thường trú, nơi cư trú hiện tại</div>
                    <p><span>Quê quán:</span> {doctor.hometown}</p>
                    <p><span>Hộ khẩu thường trú:</span> {doctor.permanent} </p>
                    <p><span>Địa chỉ cư trú:</span> {doctor.residence} </p>
                </div>
                <div className="detailcolumn">
                    <div className="detailinfor">Thông tin về nghiệp vụ</div>
                    <div className="detailrow">
                        <p><span>Chuyên khoa:</span> {doctor.specialty} </p>
                        <p><span>Bằng cấp/Chứng chỉ:</span> {doctor.certificate || "N/A"} </p>
                    </div>
                    <p><span>Học hàm:</span> {doctor.academictitle} </p>
                    <div className="detailrow">
                        <p><span>Đào tạo:</span> {doctor.training} </p>
                        <p><span>Làm việc:</span> {doctor.working} </p>
                    </div>
                    <p><span>Mô tả:</span> {doctor.description} </p>
                </div>
                <div className="interacts">
                    <button className="interact" onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button>
                    <button className="interact" onClick={onApprove}><FaCheckCircle color="#2ecc71"/> Duyệt</button>
                    <button className="interact" onClick={onReject}><FaCircleXmark color="#D72638"/> Từ chối</button>
                </div>
            </div>
        );
}
export {Detailinfordoctor};