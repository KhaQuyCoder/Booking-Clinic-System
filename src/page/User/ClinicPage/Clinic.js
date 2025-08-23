import { useContext, useEffect, useMemo, useState } from "react";
import "./Clinic.css";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import clinicData from "../../../data/clinic.json";
import ClinicCpn from "../../../components/ClinicComponent/ClinicCpn";
import Filter from "../../../components/FIlterComponent/Filter";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/LoadingComponent/Loading";
import { State } from "../../../state/context";
import Footer from "../../../components/FooterComponent/Footer";
const Clinic = () => {
  const navigate = useNavigate();
  const PER_PAGE = 15;
  const { page: pageParam } = useParams();
  const [specialty, setSpecialty] = useState("");
  const { setLoading, loading } = useContext(State);
  const specialtyData = useMemo(() => {
    const specialtyDataTMP = clinicData.flatMap((i) => i.specialty || []);
    return [...new Set(specialtyDataTMP.map((s) => s.trim()))];
  }, []);

  const totalPages = Math.max(1, Math.ceil(specialtyData.length / PER_PAGE));
  const FilterClinic = useMemo(() => {
    if (!specialty) return clinicData;
    return clinicData.filter((item) =>
      item.specialty.some((s) => s === specialty)
    );
  }, [clinicData, specialty]);
  const currentPage = useMemo(() => {
    const n = parseInt(pageParam || "1");
    return Math.min(Math.max(n, 1), totalPages);
  }, [pageParam, totalPages]);

  const clinicToShow = useMemo(() => {
    const start = (currentPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    return FilterClinic.slice(start, end);
  }, [FilterClinic, totalPages]);

  const handleFilterDocterSpecialty = (value) => {
    setSpecialty(value);
    setLoading(true);
    navigate("/phong-kham/page/1");
    setTimeout(() => setLoading(false), 800);
  };
  useEffect(() => {
    window.scrollTo({ top: true, behavior: "instant" });
  }, []);
  return (
    <>
      <Header />
      <div className="container-clinic">
        <Filter
          specialtyData={specialtyData}
          handleFilterDocterSpecialty={handleFilterDocterSpecialty}
        />
        {!loading && (
          <div className="wrapper-clinic">
            {clinicToShow.map((item, index) => (
              <ClinicCpn item={item} index={index} />
            ))}
          </div>
        )}
        {loading && <Loading />}
      </div>
      {!loading && <Footer />}
    </>
  );
};

export default Clinic;
