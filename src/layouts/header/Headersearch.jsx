import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {FiMenu, FiSettings} from 'react-icons/fi';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdOutlineSort} from 'react-icons/md';
import {TiDelete} from 'react-icons/ti';
import './Headersearch.css';
import { BiLoaderCircle } from 'react-icons/bi';
function HeaderSearch() {
    return (
        <div className='headerSearch'>
            <MdOutlineSort size={20} className='icon' />
            <div className="searchBox">
                <input type="text" placeholder="Tìm kiếm..." className='searchInput' />
                <button className='clear'>
                    <TiDelete size={20} className="iconDelete" />
                </button>
                <BiLoaderCircle size={20} className="iconLoading" />
                <AiOutlineSearch size={20} className="iconSearch" />
            </div>
            <Tippy content="Menu" placement="bottom">
                <button className='menuButton'>
                    <FiMenu size={20} className="icon" alt="" />
                </button>
            </Tippy>
            <Tippy content="Cài đặt" placement="bottom">
                <button className='settingsButton'>
                    <FiSettings size={20} className="icon" alt="" />
                </button>
            </Tippy>
        </div>
    );
}
export  {HeaderSearch};