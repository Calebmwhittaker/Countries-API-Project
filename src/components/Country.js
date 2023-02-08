import React from "react";
import "../assets/styles/Country.css";

const Country = (props) => {
  const {
    population,
    name: { common },
    flags: { png },
    capital,
    currencies,
    languages,
  } = props.country;

  const FormatCurrency = () => {
    if (currencies !== undefined) {
      const currencyKeys = Object.keys(currencies);
      let currencyNamesArray = [];
      for (let i = 0; i < currencyKeys.length; i++) {
        currencyNamesArray.push(currencies[currencyKeys[i]].name);
      }
      const joinedCurrencyNamesArray = currencyNamesArray.join(", ");
      return <span>{joinedCurrencyNamesArray}</span>;
    } else {
      return <span>No Currency</span>;
    }
  };

  const FormatLanguages = () => {
    if (languages !== undefined) {
      let languagesArray = [];
      const languageValues = Object.values(languages);
      for (let i = 0; i < languageValues.length; i++) {
        languagesArray.push(languageValues[i]);
      }
      const joinedLanguageArray = languagesArray.join(", ");
      return (
        <>
          <b>{languagesArray.length > 1 ? `Languages:` : `Language:`}</b>{" "}
          <span>{joinedLanguageArray}</span>
        </>
      );
    } else {
      return (
        <span>
          <b>Languages</b>: No languages
        </span>
      );
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        margin: "40px -10px",
        padding: "30px 20px",
      }}
      className="burger"
    >
      <img
        style={{ marginBottom: "10px", width: "350px", height: "200px" }}
        src={png}
        alt="country flag"
      />
      <h2>{common.toUpperCase()}</h2>
      <div
        style={{ textAlign: "left", marginLeft: "20px", marginTop: "20px" }}
        className="country-text"
      >
        <p>
          <b>Capital</b>: {capital ? capital[0] : "No Capital"}
        </p>
        <p>
          <b>Population</b>:{" "}
          {Intl.NumberFormat("en-US", { style: "decimal" }).format(population)}
        </p>
        <p>
          <b>Currency</b>: <FormatCurrency />
        </p>
        <p>
          <FormatLanguages />
        </p>
      </div>
    </div>
  );
};

export default Country;
