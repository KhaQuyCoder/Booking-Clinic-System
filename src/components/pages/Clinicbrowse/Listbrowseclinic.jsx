import React, { useEffect, useState } from "react";
import { FaFileAlt, FaCheckCircle} from "react-icons/fa";
import clinicData from '../../../data/Browseclinic.json';
import './Listbrowseclinic.css';
import { Commontable } from "../../table/Commontable";
import { FaCircleXmark } from "react-icons/fa6";

function Listbrowseclinic() {
    const [clinics, setClinics] = useState([]);
    useEffect(() => {
        setClinics(clinicData);
    }, []);
    console.log("clinics: ", clinics);
    console.log("typeof clinic: ", typeof clinics);
    console.log("clinicData =", clinicData);
    console.log("Array.isArray(clinicData) =", Array.isArray(clinicData));
    const columnsClinic = [
        { name: "ID phòng khám", key: 'idclinic' },
        { name: "Tên phòng khám", key: 'name' },
        { name: "Loại hình phòng khám", key: 'type' },
        { name: "Vai trò", key: 'role' },
        { name: "Thời gian gửi", key: 'timesent' }
    ];
    const actions = [
        <FaFileAlt className = "iconf" />,
        <FaCheckCircle className="iconf"/>,
        <FaCircleXmark className="iconf"/>,
    ];
return (
    <div>
        <Commontable columns={columnsClinic} data={clinics} actions= {actions}/>
    </div>
        // <div className="containertable">
        //     <table className="clinictable">
        //         <thead>
        //             <tr>
        //                 <th>ID phòng khám</th>
        //                 <th>Tên phòng khám</th>
        //                 <th>Loại hình phòng khám</th>
        //                 <th>Vai trò</th>
        //                 <th>Thời gian gửi</th>
        //                 <th>Hoạt động</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {clinics.map((item) => (
        //                 <tr key={item.idclinic}>
        //                     <td>{item.idclinic}</td>
        //                     <td>{item.name}</td>
        //                     <td>{item.type}</td>
        //                     <td>{item.role}</td>
        //                     <td>{item.timesent}</td>
        //                     <td className="action">
        //                         <FaFileAlt className="iconf"/>
        //                         <FaCheckCircle className="iconf"/>
        //                         <FaTrashAlt className="iconf"/>
        //                     </td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
    );
}
export { Listbrowseclinic };