import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {FiMail, FiBell } from 'react-icons/fi';
import {AiOutlineMoon} from 'react-icons/ai';
import {BiMessageDots } from 'react-icons/bi';
import './Headerinfor.css';
function HeaderInfor() {
    // const [avatarUser, setAvatarUser] = useState("");
    // useEffect(() => {
    //     const savedAvatar = localStorage.getItem('avatarUser');
    //     if (savedAvatar) {
    //         setAvatarUser(savedAvatar);
    //     } else {
    //         setAvatarUser(<svg width= {40} height= {40} viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
    //             <HiMiniUserCircle size={40} />
    //         </svg>); // Default avatar URL
    //     }
    // }, []);
    // const handleAvatarClick = () => {
    // }
    return (
        <div className="headerInfor">
            <Tippy content="Thông báo" placement="bottom">
                <button className="buttonNotification">
                    <FiBell size={20} className="iconk" alt="" />
                </button>
            </Tippy>
            <Tippy content="Tin nhắn" placement="bottom">
                <button className="buttonMessage">
                    <BiMessageDots size={20} className="iconk" alt="" />
                </button>
            </Tippy>
            <Tippy content="Email" placement="bottom">
                <button className="buttonEmail">
                    <FiMail size={20} className="iconk" alt="" />
                </button>
            </Tippy>
            <Tippy content="Chế độ tối" placement="bottom">
                <button className="buttonDarkMode">
                    <AiOutlineMoon size={20} className="iconk" alt="" />
                </button>
            </Tippy> 
        </div>

    );
}
export {HeaderInfor};