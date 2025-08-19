import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaClinicMedical } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa6';
import { HiOutlineBookmarkSquare } from 'react-icons/hi2';
import { AiOutlinePieChart } from 'react-icons/ai';
import { GoChevronRight} from 'react-icons/go';
import './Bodysidebar.css';

function Bodysidebar() {
    const [openMenu, setopenMenu] = useState("");
    const toggleMenu = (nameMenu) => {
        setopenMenu(prev => prev === nameMenu ? "" : nameMenu);
    };
    return (
        <div className="bodysidebar">
            <Link to='/duyet-phong-kham' className='browseClinic'>
                <FaClinicMedical className='iconn' />
                <span>Duyệt phòng khám</span>
            </Link>
            <Link to='/duyet-bac-si' className='browseDoctor'>
                <FaRegUser className='iconn' />
                <span>Duyệt đăng ký bác sĩ</span>
            </Link>
            <Link to='/quan-ly-phong-kham' className='manageClinic'>
                <FaClinicMedical size={20} className='iconn' />
                <div className='manage'>Quản lý phòng khám</div>
                <GoChevronRight size={20} className='iconn' />
            </Link>
            <button className='managePackage' onClick={() => toggleMenu('package')}>
                <HiOutlineBookmarkSquare size={20} className='iconn' />
                <div className='manage'>Quản lý gói đăng ký</div>
                <GoChevronRight
                    size={20}
                    className={`iconn ${openMenu === 'package' ? 'rotate' : ''}`}
                />
            </button>
            {openMenu === 'package' && (
                <div className='submenu'>
                    <Link to='/quan-ly-goi/tao-goi' className='createPackage'>Tạo gói đăng ký</Link>
                    <Link to='/quan-ly-goi/danh-sach-goi' className='managePackageList'>Danh sách gói đăng ký</Link>
                </div>
            )}
            <button className='reportStatistics' onClick={() => toggleMenu('statisticsReport')}>
                <AiOutlinePieChart size={20} className='iconn' />
                <div className='manage'>Thống kê báo cáo</div>
                <GoChevronRight
                    size={20}
                    className={`iconn ${openMenu === 'statisticsReport' ? 'rotate' : ''}`}
                />
            </button>
            {openMenu === 'statisticsReport' && (
                <div className='submenu'>
                    <Link to='/thong-ke-bao-cao/tong-quan' className='overviewStatistics'>Tổng quan</Link>
                    <Link to='/thong-ke-bao-cao/thong-ke-doanh-thu' className='revenueStatistics'>Thống kê doanh thu</Link>
                </div>
            )}
        </div>
    );
}
export { Bodysidebar };