
import React from 'react';
import { Link } from "react-router-dom";
import './Logo.css';
function LogoSidebar() {
    return (
        <Link to='/' className="logobox">
            <img src='/logo.svg' alt="Logo" className="logoSidebar" />
        </Link>
    );
}
export { LogoSidebar };
