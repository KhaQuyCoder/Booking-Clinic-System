import React, { useEffect, useState } from "react";
import packageData from '../../../../data/Packagelist.json'
import { FaFileAlt, FaTrashAlt, FaWrench } from "react-icons/fa";
import { Commontable } from "../../../table/Commontable";

function Listpackages() {
    const [packagess, setPackagess] = useState([]);
    useEffect(() => {
        setPackagess(packageData);
    }, []);
    console.log("packagess: ", packagess);
    console.log("typeof packagess: ", typeof packagess);
    console.log("packageData=", packageData);
    console.log("Array.isArray(packageData) =", Array.isArray(packageData));
    const columnsPackage = [
        {name: "ID gói", key: "idpackage"},
        {name: "Tên gói", key: "name"},
        {name: "Loại chu kỳ", key: "termtype"},
        {name: "Số ngày hiệu lực", key: "effectiveday"},
        {name: "Giá", key: "price"},
        {name: "Đơn vị tiền", key: "currencytype"}
    ];
    const actions = [
        <FaFileAlt className="iconf" />,
        <FaWrench className="iconf" />,
        <FaTrashAlt className="iconf" />
    ];
    return (
        <div>
            <Commontable columns={columnsPackage} data={packagess} actions={actions} />
        </div>
    );
}
export {Listpackages};