import React from "react";
import "../../assets/styles/Icon.css";
import Input from "../../shared/Input.js";
import Graph from "../../components/Graph.js";
import Countries from "../../components/Countries.js";

const Main = (props) => {
  const { handleChange, handleClick, data, query, graph } = props.mainData;
  const CountriesData = {
    data: data,
    query: query,
  };
  return (
    <main className="main-wrapper" style={{ backgroundColor: "#ebeaea" }}>
      <div className="input-wrapper" style={{ backgroundColor: "#ffffff" }}>
        <Input
          onKeyUp={handleChange}
          placeholder="Search countries by name, city, and languages"
        />
        <a href="#graph-container">
          <i
            style={{
              fontSize: "60px",
              marginBottom: "20px",
              color: "#459dfb",
            }}
            onClick={handleClick}
            className="fa-solid fa-chart-simple"
          />
        </a>
        <h2 style={{ paddingBottom: "30px" }}>
          Click the icon to see more information
        </h2>
      </div>
      <div
        style={{ justifyContent: "space-around" }}
        className="row m-auto countries-container"
      >
        <Countries CountriesData={CountriesData} />
      </div>
      <div id="graph-container">
        <Graph data={data} query={query} />
      </div>
      <a href="#header-wrapper">
        <button style={{ marginBottom: "20px" }}>Back to Top</button>
      </a>
    </main>
  );
};

export default Main;
