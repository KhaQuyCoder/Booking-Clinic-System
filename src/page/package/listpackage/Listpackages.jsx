import React from "react";
import { FaFileAlt, FaTrashAlt, FaWrench } from "react-icons/fa";
import { Commontable } from "../../../components/table/Commontable";
import { useNavigate } from "react-router-dom";
import { useCommon } from "../../../components/CommonContext";

function Listpackages() {
    const navigate  = useNavigate();
    const {packages, rejectPackage} = useCommon();

    const handleReject = (id) => {
        const confirmDelete = window.confirm("Bạn có chắc muốn xóa gói đăng ký này?");
        if(confirmDelete) {
            rejectPackage(id);
        }
    };

    const handleReview = (packagess) => {
        navigate(`/quan-ly-goi/danh-sach-goi/thong-tin-goi/${packagess.id}`, {state: {packagess}});
    }

    const handleFix = (packagess) => {
        navigate(`/quan-ly-goi/danh-sach-goi/sua-thong-tin-goi/${packagess.id}`, {state: {packagess}});
    }
    const columnsPackage = [
        {name: "ID gói", key: "id"},
        {name: "Tên gói", key: "name"},
        {name: "Loại chu kỳ", key: "termtype"},
        {name: "Số ngày hiệu lực", key: "effectiveday"},
        {name: "Giá", key: "price"},
        {name: "Đơn vị tiền", key: "currencytype"}
    ];
    const actions = [
        (packagess) => <FaFileAlt title="Xem chi tiết" className="iconf" onClick={() => handleReview(packagess)} />,
        (packagess) => <FaWrench title="Sửa thông tin" className="iconf" onClick={() => handleFix(packagess)}/>,
        (packagess) => <FaTrashAlt title="Xóa thông tin" className="iconf" onClick={() => handleReject(packagess.id)}/>
    ];
    return (
        <div>
            <Commontable columns={columnsPackage} data={packages} actions={actions} />
        </div>
    );
}
export {Listpackages};