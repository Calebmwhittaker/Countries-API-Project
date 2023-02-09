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
      return <p>{languagesArray.length}</p>;
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
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className="graph-headers"
      >
        <div
          style={{
            width: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="country-name-header-container"
        >
          <div className="country-name-header">
            <p style={{ margin: "0 auto" }}>
              <b>Country</b>
            </p>
          </div>
        </div>
        <div
          style={{
            width: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="country-progress-header-container"
        >
          <div className="country-progress-header">
            <p style={{ margin: "0 auto" }}>
              {languagesData ? <b>Languages</b> : <b>Population</b>}
            </p>
          </div>
        </div>
        <div
          style={{
            width: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="country-value-header-container"
        >
          <div className="country-value-header">
            <p style={{ margin: "0 auto" }}>
              <b>Total {languagesData ? "Languages" : "Population"}</b>
            </p>
          </div>
        </div>
      </div>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
              key={country.name.common}
              className="graph-country-container"
            >
              <div
                style={{
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="country-name-div-container"
              >
                <div className="country-name-div">{country.name.common}</div>
              </div>
              <div
                style={{
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="country-progress-div-container"
              >
                <div className="country-progress-div">
                  {languagesData && (
                    <div className="country-language-progress-div">
                      {formatLanguages(country.languages, "progress")}
                    </div>
                  )}
                  {populationData && (
                    <div className="country-population-progress-div">
                      <progress
                        style={{
                          height: "40px",
                        }}
                        value={country.population}
                        max={7888000000}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div
                style={{
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="country-value-div-continer"
              >
                <div style={{ height: "25px" }} className="country-value-div">
                  {languagesData && (
                    <div className="country-language-value-div">
                      {formatLanguages(country.languages, "value")}
                    </div>
                  )}
                  {populationData && (
                    <div className="country-population-value-div">
                      {country.population}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Graph;
