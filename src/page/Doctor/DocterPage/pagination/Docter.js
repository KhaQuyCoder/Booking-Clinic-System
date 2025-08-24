import { useContext, useMemo, useState, useEffect } from "react";
import "./Docter.css";
import Header from "../../../../layouts/LayoutsUser/Header/Header";
import Footer from "../../../../components/FooterComponent/Footer";
import clinicData from "../../../../data/clinic.json";
import { DocterAll } from "../../../../components/DocterComponent/CarDocter";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../../components/LoadingComponent/Loading";
import Filter from "../../../../components/FIlterComponent/Filter";
import { FilterAll } from "../../../../components/FIlterComponent/Filter";
import { State } from "../../../../state/context";
import TotalPage from "../../../../components/TotalPagaComponent/TotalPage";

const Docter = () => {
  const navigate = useNavigate();
  const { page: pageParam } = useParams();
  const PER_PAGE = 15;

  const [hocHamFilter, setHocHamFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const { loading, setLoading } = useContext(State);
  const data = [
    { id: 1, name: "Học hàm", value: "" },
    { id: 2, name: "Giáo sư", value: "Giáo sư" },
    { id: 3, name: "Phó giáo sư", value: "Phó giáo sư" },
  ];
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
  useEffect(() => {
    window.scrollTo({ top: true, behavior: "instant" });
  }, []);
  return (
    <>
      <Header />
      <div className="container-docterAll">
        <div className="wrapper-filter-docter">
          <Filter
            handleFilterDocterSpecialty={handleFilterDocterSpecialty}
            specialtyData={specialtyData}
          />
          <FilterAll
            handleFilterDocterHocHam={handleFilterDocterHocHam}
            data={data}
          />
        </div>

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
              <TotalPage
                totalPages={totalPages}
                currentPage={currentPage}
                handlePage={handlePage}
              />
            </div>
          </>
        )}
      </div>
      {!loading && <Footer />}
    </>
  );
};
export default Docter;
