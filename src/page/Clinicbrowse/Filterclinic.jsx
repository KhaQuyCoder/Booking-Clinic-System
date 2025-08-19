import React from "react";
import { BiCalendarEvent } from "react-icons/bi";
import { TbCaretUpDownFilled } from "react-icons/tb";
import { GoChevronDown } from 'react-icons/go';
import './Filterclinic.css';

function Filterclinic() {
    return (
        <div className="filterclinic">
            <button className="filter">
                <BiCalendarEvent size={20} className="icon"/>
                <span className="sp">Thời gian</span>
                <GoChevronDown size={20} className="icon" />
            </button>
            <button className="arrange">
                <TbCaretUpDownFilled size={20} className="icon"/>
                <span className="sp">Cũ nhất</span>
                <GoChevronDown size={20} className="icon" />
            </button>
        </div>
    );
}
export {Filterclinic};