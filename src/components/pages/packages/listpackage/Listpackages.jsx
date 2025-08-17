import React, { useEffect, useState } from "react";
import packageData from '../../../../data/Packagelist.json'
import { FaFileAlt, FaTrashAlt, FaWrench } from "react-icons/fa";
import { Commontable } from "../../../table/Commontable";
import { useNavigate } from "react-router-dom";

function Listpackages() {
    const [packagess, setPackagess] = useState([]);
    const navigate  = useNavigate();
    useEffect(() => {
        setPackagess(packageData);
    }, []);

    const handleReview = (packages) => {
        navigate(`/quan-ly-goi/danh-sach-goi/thong-tin-goi/${packages.id}`, {state: {packages}});
    }

    const handleFix = (packages) => {
        navigate(`/quan-ly-goi/danh-sach-goi/sua-thong-tin-goi/${packages.id}`, {state: {packages}});
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
        (packages) => <FaFileAlt title="Xem chi tiết" className="iconf" onClick={() => handleReview(packages)} />,
        (packages) => <FaWrench title="Sửa thông tin" className="iconf" onClick={() => handleFix(packages)}/>,
        <FaTrashAlt className="iconf" />
    ];
    return (
        <div>
            <Commontable columns={columnsPackage} data={packagess} actions={actions} />
        </div>
    );
}
export {Listpackages};