import React from 'react';
// import {FiMenu, FiSettings, FiMail, FiBell } from 'react-icons/fi';
// import {AiOutlineSearch, AiOutlineMoon} from 'react-icons/ai';
// import {MdOutlineSort} from 'react-icons/md';
// import {BiMessageDots } from 'react-icons/bi';
import {HeaderSearch} from './Headersearch';
import { HeaderInfor } from './Headerinfor';
import './Header.css';
function Header() {
  return (
    <div className="header">
        <HeaderSearch />
        <HeaderInfor />
    </div>
  );
}
export {Header};