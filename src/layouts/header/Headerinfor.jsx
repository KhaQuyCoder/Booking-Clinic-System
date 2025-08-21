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
            <img className="userAvatar" src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/514015323_2154339315072157_5006781813896747887_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=fe59b0&_nc_eui2=AeFbbNf6HL-6mlrLxjeV-RCwCU_dVwmto2UJT91XCa2jZVETs8u8_PfDCSJBGdF8UBdL-EZMeTJjKTAKyBlzF0KV&_nc_ohc=HoKHskdSK0AQ7kNvwEBa9qX&_nc_oc=AdkXeBfuWXsCqP-TxfCCUaR6LAw_IfayIjFS3YINJPpRTda5IJeMsThDkVoww33_lLf5v196pcJIIVkleVlHVjMC&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&_nc_gid=PvUdowg8MXFhJyZuHjlpiA&oh=00_AfQC-AVYLh5qUhpplV3TaQCaw8FqXS4rE6tcg7bTpOSGng&oe=688A499D" alt="" />
        </div>

    );
}
export {HeaderInfor};