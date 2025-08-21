import { Link } from "react-router-dom";
import styles from "./Acc.module.css";
function Acc(props) {
  return (
    <Link to="/account/userprofile" className={styles.acc}>
      <img
        className="userAvatar"
        src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/514015323_2154339315072157_5006781813896747887_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=fe59b0&_nc_eui2=AeFbbNf6HL-6mlrLxjeV-RCwCU_dVwmto2UJT91XCa2jZVETs8u8_PfDCSJBGdF8UBdL-EZMeTJjKTAKyBlzF0KV&_nc_ohc=HoKHskdSK0AQ7kNvwEBa9qX&_nc_oc=AdkXeBfuWXsCqP-TxfCCUaR6LAw_IfayIjFS3YINJPpRTda5IJeMsThDkVoww33_lLf5v196pcJIIVkleVlHVjMC&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&_nc_gid=PvUdowg8MXFhJyZuHjlpiA&oh=00_AfQC-AVYLh5qUhpplV3TaQCaw8FqXS4rE6tcg7bTpOSGng&oe=688A499D"
        alt=""
      />
      <div className="admin">
        <div className={styles.ad}>{props.name} Admin</div>
        <div className={styles.role}>Admin</div>
      </div>
    </Link>
  );
}
export { Acc };
