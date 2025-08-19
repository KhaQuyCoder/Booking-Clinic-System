import React from "react";
import { Link } from "react-router-dom";
import { LuKeyRound } from 'react-icons/lu';
import { AiOutlineLogout } from 'react-icons/ai';
import './Logsidebar.css';

function Logsidebar() {
    return (
        <div className="logsidebar">
            <Link to='/doi-mat-khau' className="changePassword">
                <LuKeyRound className="iconn" />
                <div>Đổi mật khẩu</div>
            </Link>
            <Link to='/account/login' className="logout">
                <AiOutlineLogout className="iconn" />
                <div>Đăng xuất</div>
            </Link>
        </div>
    );
}
export { Logsidebar };