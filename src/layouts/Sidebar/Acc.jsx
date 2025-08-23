import React from "react";
import { Link } from "react-router-dom";
import './Acc.css';
import { useCommon } from "../../components/CommonContext";
function Acc() {
    const {user} = useCommon();
    return (
        <Link to='/account/userprofile' className="acc">
            <img className="userAvatar" src={user?.avatar} alt="" />
            <div className="admin">
                <div className="ad">{user?.name} Admin</div>
                <div className="role">Admin</div> 
            </div>
        </Link>
    );
}
export { Acc };