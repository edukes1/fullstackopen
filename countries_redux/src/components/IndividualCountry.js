import React, { useEffect } from "react";
import Country from "./Country";
const IndividualCountry = ({ country, currentWeather }) => {
  return (
    <div>
      <h1> {country.name} </h1>
      <h1> capital: {country.capital}</h1>
      <h2> population: {country.population}</h2>
      <></>
      <h1> languages</h1>{" "}
      <p>
        {country.languages.map((language) => (
          <li key={language.name}> {language.name} </li>
        ))}{" "}
      </p>
      <img src={country.flag} />
      <h1> Weather in {country.capital}</h1>
      <p>
        {" "}
        <strong>temperature:</strong> {currentWeather.temperature} celsius
      </p>
      <img src={currentWeather.current.weather_icons} />
      <p>
        {" "}
        <strong>wind: </strong>
        {currentWeather.current.wind_speed} mph direction...
        {currentWeather.current.wind_dir}
      </p>
    </div>
  );
};
export default IndividualCountry;
