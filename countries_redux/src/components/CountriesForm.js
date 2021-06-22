import React from "react";
const CountriesForm = ({ handleSearch, filter }) => {
  return (
    <form>
      {" "}
      enter country to lookup...
      <input value={filter} onChange={handleSearch}></input>{" "}
    </form>
  );
};
export default CountriesForm;
