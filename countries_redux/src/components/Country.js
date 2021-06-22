import React from "react";

const Country = ({ country, showCountry }) => {
  return (
    <li>
      {" "}
      {country.name}{" "}
      <button value={country.name} onClick={showCountry}>
        {" "}
        show
      </button>
    </li>
  );
};

export default Country;

// onclick we want the country mode to shift to an indivdiual one which means we need some functoin that calls the individual country view
