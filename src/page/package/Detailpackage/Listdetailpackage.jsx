import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaTrashAlt, FaWrench } from "react-icons/fa";
import './Listdetailpackage.css';
import { useCommon } from "../../../components/CommonContext";

function Listdetailpackage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const {packages, rejectPackage} = useCommon();

    const [packagess, setPackagess] = useState(location.state?.packagess || null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!packagess) {
            setLoading(true);
            const found = packages.find(c => String(c.id) === String(id));
            if (found) {
                setPackagess(found);
            }
            setLoading(false);
        }
    }, [packagess, id, packages]);

    const handleReject = () => {
        const confirmDelete = window.confirm("Bạn có chắc muốn xóa gói đăng ký này?");
        if(confirmDelete) {
            rejectPackage(packagess.id);
            navigate(-1);
        }
    };

    const handleFix = (packagess) => {
        navigate(`/quan-ly-goi/danh-sach-goi/sua-thong-tin-goi/${packagess.id}`, { state: { packagess } });
    }

    if (loading) return <div>Đang load...</div>;

    if (!packagess) {
        return (
            <div>Không tìm thấy dữ liệu gói đăng ký. <button onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button></div>
        )
    }
    return (
        <div className="listdetail">
            <div className="columnpackage">
                <div>Thông tin đăng ký</div>
                <div className="rowpackage">
                    <p><span>*Tài khoản tạo:</span> {packagess.idname}</p>
                    <p><span>*Ngày tạo:</span> {packagess.date || "N/A"}</p>
                </div>
                <div className="rowpackage">
                    <p><span>*ID gói đăng ký:</span> {packagess.id}</p>
                    <p><span>*Tên gói đăng ký:</span> {packagess.name}</p>
                </div>
                <div className="rowpackage">
                    <p><span>*Loại chu kỳ:</span> {packagess.termtype}</p>
                    <p><span>*Số ngày sử dụng:</span> {packagess.effectiveday}</p>
                </div>
                <div className="rowpackage">
                    <p><span>*Giá:</span> {packagess.termtype}</p>
                    <p><span>*Đơn vị tiền tệ:</span> {packagess.currencytype}</p>
                </div>
                <div className="rowpackage">
                    <p><span>Mô tả ngắn:</span> {packagess.describe || "N/A"}</p>
                </div>
            </div>
            <div className="interacts">
                <button className="interact" onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button>
                <button className="interact" onClick={() => handleFix(packagess)}><FaWrench color="#2ecc71" /> Sửa</button>
                <button className="interact" onClick={handleReject}><FaTrashAlt color="#D72638" /> Xóa</button>
            </div>
        </div>
    );
}
export {Listdetailpackage};