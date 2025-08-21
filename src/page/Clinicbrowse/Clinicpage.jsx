import React from "react";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import './Clinicpage.css';

function Clinicpage() {
    return (
        <div className="pageClinics">
            <button className="iconpage">
                <RiArrowLeftDoubleFill />
            </button>
            <button className="iconpage">
                <GoChevronLeft />
            </button>
            <button className="iconpage"> 1 </button>
            <button className="iconpage">
                <GoChevronRight />
            </button>
            <button className="iconpage">
                <RiArrowRightDoubleFill />
            </button>
        </div>
    );
}
export {Clinicpage};