import { useState, useEffect } from "react";
const Experiment = () => {
  const countries = [
    "Japan",
    "Peru",
    "Philippines",
    "Russia",
    " China",
    "Peru",
    "Portugal",
    " Russia",
    "China",
    "Argentina",
    "Philippines",
    "Indonesia",
    "Macedonia",
    "Bahamas",
    "Venezuela",
    "France",
    "Poland",
    "Japan",
    "Indonesia",
    "Greece",
    " Russia",
    "Tanzania",
    "US",
    "Nigeria",
    "Norway",
    "Libya",
    "Greece",
    "Bangladesh",
  ];
  const cities = [
    "Baizhong",
    "Jishi",
    "Boaco",
    "Milano",
    "Qikeshu",
    "Fangxian",
    "Shaxi",
    "Xingang",
    "Jugantang",
    "Paris",
    "Courtaboeuf",
    "Caujul",
    "Londiani",
    "Yueshan",
    "Kebonbencoy",
    "Changtu",
    "Boneng",
    "Sydney",
    "Xiejiatan",
    "Hevlín",
    "Illapel",
    "Sagopshi",
    "Wengang",
    "Zhouji",
    "Castres",
    "Rychtal",
    "Orléans",
    "Mizhirah",
    "Liuzuo,",
  ];

  const [city, setCity] = useState(false);
  const [country, setCountry] = useState(false);

  const cityHandle = () => {
    setCity(!city);
  };
  const countryHandle = () => {
    setCountry(!country);
  };

  return (
    <div>
      <button onClick={cityHandle}>City</button>
      {city && (
        <ul>
          {cities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      )}
      <button onClick={countryHandle}>Country</button>
      {country && (
        <ul>
          {countries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      )}

      <div></div>
    </div>
  );
};
export default Experiment;
