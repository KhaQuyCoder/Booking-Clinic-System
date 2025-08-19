import React from 'react';
import { LogoSidebar } from './Logo';
import { Acc } from './Acc';
import './Sidebar.css';
import { Bodysidebar } from './Bodysidebar';
import { Logsidebar } from './Logsidebar';
function Sidebar() {
    return (
        <div className="sidebar">
            <LogoSidebar />
            <Acc name="Quan"/>
            <Bodysidebar />
            <Logsidebar />
        </div>
    );
}
export {Sidebar};