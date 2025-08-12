import React, { useEffect, useState } from "react";
import managerData from '../../../data/Browseclinic.json';
import { FaFileAlt, FaTrashAlt, FaWrench } from "react-icons/fa";
import { Commontable } from "../../table/Commontable";
function Listclinicmanager() {
    const [managers, setManagers] = useState([]);
    useEffect(() => {
        setManagers(managerData);
    }, []);
    
    const columnsManager = [
        {name: "ID phòng khám", key: 'id'},
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