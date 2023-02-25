import React from "react";
import Country from "./Country.js";

const Countries = (props) => {
  const { data, query } = props.CountriesData;
  return (
    <>
      {data
        .filter((country) => {
          if (query === "") {
            return country;
          } else if (
            country.name.common.toLowerCase().startsWith(query.toLowerCase())
          ) {
            return country;
          } else if (
            country.capital
              ? country.capital[0].toLowerCase().startsWith(query.toLowerCase())
              : null
          ) {
            return country;
          } else if (country.languages !== undefined) {
            let languagesArray = [];
            const languageValues = Object.values(country.languages);
            for (let i = 0; i < languageValues.length; i++) {
              languagesArray.push(languageValues[i].toLowerCase());
            }
            for (const language of languagesArray) {
              if (language.startsWith(query.toLowerCase())) {
                return country;
              }
            }
          }
        })
        .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
        .map((country) => {
          return (
            <div
              style={{ display: "flex", width: "25rem" }}
              key={country.name.common}
              className="col-xl-3 col-sm-6 country-container"
            >
              <Country country={country} />
            </div>
          );
        })}
    </>
  );
};

export default Countries;
