import { Link } from "react-router-dom";
import { useState } from "react";
import { FaClinicMedical } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineBookmarkSquare } from "react-icons/hi2";
import { AiOutlinePieChart } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";
import styles from "./Bodysidebar.module.css";

function Bodysidebar() {
  const [openMenu, setopenMenu] = useState("");
  const toggleMenu = (nameMenu) => {
    setopenMenu((prev) => (prev === nameMenu ? "" : nameMenu));
  };
  return (
    <div className={styles.bodysidebar}>
      <Link to="/duyet-phong-kham" className={styles.browseClinic}>
        <FaClinicMedical className={styles.iconn} />
        <span>Duyệt phòng khám</span>
      </Link>
      <Link to="/duyet-bac-si" className={styles.browseDoctor}>
        <FaRegUser className={styles.iconn} />
        <span>Duyệt đăng ký bác sĩ</span>
      </Link>
      <Link to="/quan-ly-phong-kham" className={styles.manageClinic}>
        <FaClinicMedical size={20} className={styles.iconn} />
        <div className={styles.manage}>Quản lý phòng khám</div>
        <GoChevronRight size={20} className={styles.iconn} />
      </Link>
      <button
        className={styles.managePackage}
        onClick={() => toggleMenu("package")}
      >
        <HiOutlineBookmarkSquare size={20} className={styles.iconn} />
        <div className={styles.manage}>Quản lý gói đăng ký</div>
        <GoChevronRight
          size={20}
          className={`${styles.iconn} ${
            openMenu === "package" ? "rotate" : ""
          }`}
        />
      </button>
      {openMenu === "package" && (
        <div className={styles.submenu}>
          <Link to="/quan-ly-goi/tao-goi" className={styles.createPackage}>
            Tạo gói đăng ký
          </Link>
          <Link
            to="/quan-ly-goi/danh-sach-goi"
            className={styles.managePackageList}
          >
            Danh sách gói đăng ký
          </Link>
        </div>
      )}
      <button
        className={styles.reportStatistics}
        onClick={() => toggleMenu("statisticsReport")}
      >
        <AiOutlinePieChart size={20} className={styles.iconn} />
        <div className={styles.manage}>Thống kê báo cáo</div>
        <GoChevronRight
          size={20}
          className={`${styles.iconn} ${
            openMenu === "statisticsReport" ? "rotate" : ""
          }`}
        />
      </button>
      {openMenu === "statisticsReport" && (
        <div className={styles.submenu}>
          <Link
            to="/thong-ke-bao-cao/tong-quan"
            className={styles.overviewStatistics}
          >
            Tổng quan
          </Link>
          <Link
            to="/thong-ke-bao-cao/thong-ke-doanh-thu"
            className={styles.revenueStatistics}
          >
            Thống kê doanh thu
          </Link>
        </div>
      )}
    </div>
  );
}
export { Bodysidebar };
