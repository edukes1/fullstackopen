import axios from "axios";
import React, { useState, useEffect } from "react";
import CountriesForm from "./components/CountriesForm";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryShow, setShow] = useState({});
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState(" ");
  const [capitalCity, setCapitalCity] = useState("Helsinki");
  const [currentWeather, setWeather] = useState([]);
  const [newAccessKey, setNewAccessKey] = useState("");

  const handleSearch = (event) => {
    setFilter(event.target.value);
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setFilteredCountries(filtered);
    console.log(filtered);
  };
  const showCountry = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const hook = () => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;flag;languages;population"
      )
      .then((response) => {
        setCountries(response.data);
      });
  };
  useEffect(hook, []);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${newAccessKey}&query=${capitalCity}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [newAccessKey, capitalCity]);
  const handleAccessKeyChange = (event) => setNewAccessKey(event.target.value);

  return (
    <div>
      <form>
        {" "}
        Enter your weatherstack.com access key first...
        <input
          value={newAccessKey}
          onChange={handleAccessKeyChange}
        ></input>{" "}
      </form>
      <br></br>
      <CountriesForm filter={filter} handleSearch={handleSearch} />
      <h1> Results</h1>
      <Countries
        filteredCountries={filteredCountries}
        filter={filter}
        setFilteredCountries={setFilteredCountries}
        handleSearch={handleSearch}
        setWeather={setWeather}
        currentWeather={currentWeather}
        setCapitalCity={setCapitalCity}
      />
    </div>
  );
}

export default App;
