import React  from 'react';
import {Link,useLocation} from 'react-router-dom';

const SidebarItems =[
    {
        label: 'Lập lịch khám',
        path: '/doctor/schedule',
    },
    {
        label: 'Quản lý bệnh nhân',
        path: '/docter/patients'
    },
    {
        label: 'Trả lời tư vấn',
        path: '/docter/advice',
    },
    {
        label: 'Thống kê báo cáo',
        path: '/docter/statistics',
    },
];

const Sidebar = () =>{
    const location = useLocation();
    return(
        <div className="sidebar">
            <div className="logo-container">
                <img src="/assets/logo.png" alt="Logo" className="logo"/>
            </div>

            <ul className="sidebar-menu">
                {SidebarItems.map((item) =>(
                    <li 
                        key={item.path}
                        className={`sidebar-item ${location.pathname.startsWith(item.path)?'active':''}`}
                    >
                        <Link to ={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;