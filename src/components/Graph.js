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
      return <progress value={languagesArray.length} max={15} />;
    } else if (argument === "value") {
      return <span>{languagesArray.length}</span>;
    }
  }
};

const Graph = ({ data, query }) => {
  const [languagesData, setLanguagesData] = useState(false);
  const [populationData, setPopulationData] = useState(true);
  return (
    <div style={{ backgroundColor: "#ffffff" }} className="graph-wrapper">
      {languagesData ? (
        <h2 style={{ margin: "10px 0px", padding: "20px 0px" }}>
          Number of Languages for Each Country
        </h2>
      ) : (
        <h2 style={{ margin: "10px 0px", padding: "20px 0px" }}>
          Population of Each Country
        </h2>
      )}
      <div style={{ marginBottom: "20px" }} className="buttons-container">
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
      </div>
      <table className="table table-dark table-striped table-hover">
        <thead className="graph-headers">
          <tr>
            <th>Country</th>
            <th>{languagesData ? "Languages" : "Population"}</th>
            <th>{languagesData ? "Total Languages" : "Total Population"}</th>
          </tr>
        </thead>
        <tbody>
          {populationData && (
            <tr>
              <td>World</td>
              <td>
                <progress value={7888000000} max={7888000000} />
              </td>
              <td>
                {Intl.NumberFormat("en-US", { style: "decimal" }).format(
                  7888000000
                )}
              </td>
            </tr>
          )}
          {data
            .filter((country) => {
              if (query === "") {
                return country;
              } else if (
                country.name.common
                  .toLowerCase()
                  .startsWith(query.toLowerCase())
              ) {
                return country;
              } else if (
                country.capital
                  ? country.capital[0]
                      .toLowerCase()
                      .startsWith(query.toLowerCase())
                  : null
              ) {
                return country;
              } else if (country.languages !== undefined) {
                let languagesArray = [];
                const languageValues = Object.values(country.languages);
                for (let i = 0; i < languageValues.length; i++) {
                  languagesArray.push(languageValues[i].toLowerCase());
                }
                for (const langauge of languagesArray) {
                  if (langauge.startsWith(query.toLowerCase())) {
                    return country;
                  }
                }
              }
            })
            .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
            .map((country) => {
              return (
                <tr
                  key={country.name.common}
                  className="graph-country-container"
                >
                  <td>
                    <span>{country.name.common}</span>
                  </td>
                  {languagesData && (
                    <td className="country-language-progress-div">
                      {formatLanguages(country.languages, "progress")}
                    </td>
                  )}
                  {populationData && (
                    <td className="country-population-progress-div">
                      <progress value={country.population} max={7888000000} />
                    </td>
                  )}
                  {languagesData && (
                    <td className="country-language-value-div">
                      <span>{formatLanguages(country.languages, "value")}</span>
                    </td>
                  )}
                  {populationData && (
                    <td className="country-population-value-div">
                      <span>
                        {Intl.NumberFormat("en-US", {
                          style: "decimal",
                        }).format(country.population)}
                      </span>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Graph;
