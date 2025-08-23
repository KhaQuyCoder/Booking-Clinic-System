import "./Filter.css";
const Filter = ({ specialtyData, handleFilterDocterSpecialty }) => {
  return (
    <select
      defaultValue=""
      className="filter-specialty"
      onChange={(e) => handleFilterDocterSpecialty(e.target.value)}
    >
      <option value="">Chuyên khoa</option>
      {specialtyData?.map((specialty, index) => (
        <option key={index} value={specialty}>
          {specialty}
        </option>
      ))}
    </select>
  );
};
export const FilterAll = ({ handleFilterDocterHocHam, data }) => {
  return (
    <select
      defaultValue=""
      className="filter-specialty"
      onChange={(e) => handleFilterDocterHocHam(e.target.value)}
    >
      {data.map((i) => (
        <option value={i.value} key={i.id}>
          {i.name}
        </option>
      ))}
    </select>
  );
};

export const SelectCpm = ({ data }) => {
  return (
    <select defaultValue="" className="user-filter-specialty">
      {data.map((i, index) => (
        <option value={i} key={index}>
          {i}
        </option>
      ))}
    </select>
  );
};

export default Filter;
