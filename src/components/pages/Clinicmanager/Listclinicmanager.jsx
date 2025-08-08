import React, { useEffect, useState } from "react";
import managerData from '../../../data/Managerclinic.json'
import { FaFileAlt, FaTrashAlt, FaWrench } from "react-icons/fa";
import { Commontable } from "../../table/Commontable";
function Listclinicmanager() {
    const [managers, setManagers] = useState([]);
    useEffect(() => {
        setManagers(managerData);
    }, []);
    console.log("managers: ", managers);
    console.log("typeof managers: ", typeof managers);
    console.log("managerData=", managerData);
    console.log("Array.isArray(managerData) =", Array.isArray(managerData));
    
    const columnsManager = [
        {name: "ID phòng khám", key: 'idclinic'},
        {name: "Tên phòng khám", key: 'name'},
        {name: "Loại hình phòng khám", key: 'type'},
        {name: "Số điện thoại", key: 'phone'},
        {name: "Địa chỉ cụ thể", key: 'address'},
    ];
    const actions = [
        <FaFileAlt className="iconf" />,
        <FaWrench className="iconf" />,
        <FaTrashAlt className="iconf" />
    ];
    return(
        <div>
            <Commontable columns={columnsManager} data={managers} actions={actions} />
        </div>
    );
}
export {Listclinicmanager};