import "./TotalPage.css";
const TotalPage = ({ totalPages, currentPage, handlePage }) => {
  return (
    <>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <span
          key={p}
          className={p === currentPage ? "active" : ""}
          onClick={() => handlePage(p)}
        >
          {p}
        </span>
      ))}
    </>
  );
};

export default TotalPage;
