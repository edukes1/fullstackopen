import React from "react";
import Country from "./Country";
import IndividualCountry from "./IndividualCountry";
const Countries = ({
  filter,
  filteredCountries,
  setFilteredCountries,
  handleSearch,
  setWeather,
  currentWeather,
  weather,
  setCapitalCity,
}) => {
  return (
    <div>
      {filter === "" || filteredCountries.length < 1 ? (
        <p>'No results'</p>
      ) : filteredCountries.length > 10 ? (
        <p>too many results.. keep typing</p>
      ) : filteredCountries.length === 1 ? (
        (setCapitalCity(filteredCountries[0].capital),
        console.log(currentWeather),
        filteredCountries.map((country) => (
          <IndividualCountry
            key={country.name}
            country={country}
            weather={weather}
            currentWeather={currentWeather}
            setWeather={setWeather}
          />
        )))
      ) : (
        filteredCountries.map((country) => (
          <Country
            key={country.name}
            country={country}
            filter={filter}
            setFilteredCountries={setFilteredCountries}
            filteredCountries={filteredCountries}
            showCountry={handleSearch}
          />
        ))
      )}
    </div>
  );
};

export default Countries;
