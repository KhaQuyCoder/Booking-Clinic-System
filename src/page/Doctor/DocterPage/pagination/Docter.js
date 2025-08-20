import React, { useContext, useMemo, useState } from "react";
import "./Docter.css";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import Footer from "../../../../components/FooterComponent/Footer";
import clinicData from "../../../../data/clinic.json";
import { DocterAll } from "../../../../components/DocterComponent/CarDocter";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/LoadingComponent/Loading";
import { State } from "../../../../state/context";

export const Docter = () => {
  const navigate = useNavigate();
  const { page: pageParam } = useParams();
  const PER_PAGE = 15;

  const [hocHamFilter, setHocHamFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const { loading, setLoading } = useContext(State);

  const specialtyData = useMemo(() => {
    const allSpecialties = clinicData.flatMap((item) => item.specialty || []);
    return [...new Set(allSpecialties.map((s) => s.trim()))];
  }, []);

  const allDoctors = useMemo(() => {
    return clinicData.flatMap((item) => item.docter || []);
  }, []);

  const filteredDoctors = useMemo(() => {
    return allDoctors.filter((doctor) => {
      const matchSpecialty =
        !specialtyFilter || doctor.specialty === specialtyFilter;
      const matchHocHam = !hocHamFilter || doctor.HocHam === hocHamFilter;
      return matchSpecialty && matchHocHam;
    });
  }, [allDoctors, specialtyFilter, hocHamFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredDoctors.length / PER_PAGE));

  const currentPage = useMemo(() => {
    const n = parseInt(pageParam || "1", 10);
    return Math.min(Math.max(n, 1), totalPages);
  }, [pageParam, totalPages]);

  const doctorsToShow = useMemo(() => {
    console.log(filteredDoctors);

    const start = (currentPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    return filteredDoctors.slice(start, end);
  }, [filteredDoctors, currentPage]);

  const handlePage = (p) => {
    if (p !== currentPage) {
      navigate(`/bac-si/page/${p}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFilterDocterSpecialty = (value) => {
    setSpecialtyFilter(value);
    setLoading(true);
    navigate("/bac-si/page/1");
    setTimeout(() => setLoading(false), 800);
  };

  const handleFilterDocterHocHam = (value) => {
    setHocHamFilter(value);
    setLoading(true);
    navigate("/bac-si/page/1");
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <>
      <Header />
      <div className="container-docterAll">
        <select
          defaultValue=""
          className="filter-specialty"
          onChange={(e) => handleFilterDocterSpecialty(e.target.value)}
        >
          <option value="">Chuyên khoa</option>
          {specialtyData.map((specialty, index) => (
            <option key={index} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
        <select
          defaultValue=""
          className="filter-specialty"
          onChange={(e) => handleFilterDocterHocHam(e.target.value)}
        >
          <option value="">Học hàm</option>
          <option value="Giáo sư">Giáo sư</option>
          <option value="Phó giáo sư">Phó giáo sư</option>
        </select>

        {loading && <Loading />}

        {!loading && (
          <>
            <div className="wrapper-docterAll">
              {doctorsToShow.length > 0 ? (
                doctorsToShow.map((doctor, index) => (
                  <DocterAll key={`${doctor.name}-${index}`} doctor={doctor} />
                ))
              ) : (
                <p>Không tìm thấy bác sĩ phù hợp.</p>
              )}
            </div>
            <div className="indexPage">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <span
                  key={p}
                  className={p === currentPage ? "active" : ""}
                  onClick={() => handlePage(p)}
                >
                  {p}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      {!loading && <Footer />}
    </>
  );
};
