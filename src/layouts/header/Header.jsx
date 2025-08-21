import React from 'react';
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