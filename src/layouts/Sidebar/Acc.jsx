import { Link } from "react-router-dom";
import styles from "./Acc.module.css";
import { useCommon } from "../../components/CommonContext";
function Acc() {
  const { user } = useCommon();
  return (
    <Link to="/account/userprofile" className={styles.acc}>
      <img className={styles.userAvatar} src={user?.avatar} alt="" />
      <div className={styles.admin}>
        <div className={styles.ad}>{user?.name} Admin</div>
        <div className={styles.role}>Admin</div>
      </div>
    </Link>
  );
}
export { Acc };
