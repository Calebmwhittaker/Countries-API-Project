import React, { useState } from "react";
import Button from "../shared/Button.js";

const formatLanguages = (languages, argument) => {
  let languagesArray = [];
  if (languages !== undefined) {
    const languageValues = Object.values(languages);
    for (let i = 0; i < languageValues.length; i++) {
      languagesArray.push(languageValues[i].toLowerCase());
    }
    if (argument === "progress") {
      return <progress value={languagesArray.length} max={10} />;
    } else if (argument === "value") {
      return <p>{languagesArray.length}</p>;
    }
  }
};

const Graph = ({ data, query }) => {
  const [languagesData, setLanguagesData] = useState(false);
  const [populationData, setPopulationData] = useState(true);
  return (
    <div className="graph-wrapper">
      <Button
        onClick={() => {
          setPopulationData(true);
          setLanguagesData(false);
        }}
        text={"Population"}
      />
      <Button
        onClick={() => {
          setLanguagesData(true);
          setPopulationData(false);
        }}
        text={"Languages"}
      />
      {data
        .filter((country) => {
          if (query === "") {
            return country;
          } else if (
            country.name.common.toLowerCase().includes(query.toLowerCase())
          ) {
            return country;
          } else if (
            country.capital
              ? country.capital[0].toLowerCase().includes(query.toLowerCase())
              : null
          ) {
            return country;
          } else if (country.languages !== undefined) {
            let languagesArray = [];
            const languageValues = Object.values(country.languages);
            for (let i = 0; i < languageValues.length; i++) {
              languagesArray.push(languageValues[i].toLowerCase());
            }
            if (languagesArray.includes(query.toLowerCase())) {
              return country;
            }
          }
        })
        .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
        .map((country) => {
          return (
            <div key={country.name.common} className="graph-country-container">
              <div className="country-name-div">{country.name.common}</div>
              <div className="country-progress-div">
                <div className="country-language-progress-div">
                  {formatLanguages(country.languages, "progress")}
                </div>
                <div className="country-population-progress-div">
                  <progress value={country.population} max={7888000000} />
                </div>
              </div>
              <div className="country-value-div">
                <div className="country-language-value-div">
                  {formatLanguages(country.languages, "value")}
                </div>
                <div className="country-population-value-div">
                  {country.population}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Graph;
