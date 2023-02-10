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
        <a
          style={{ textDecoration: "none", color: "black", fontSize: "30px" }}
          href="#graph-container"
        >
          <i
            style={{
              fontSize: "60px",
              marginBottom: "20px",
              color: "#459dfb",
            }}
            onClick={handleClick}
            className="fa-solid fa-chart-simple"
          >
            <span
              style={{
                fontSize: "30px",
                display: "block",
                padding: "10px 0px",
                color: "black",
              }}
            >
              Graph
            </span>
          </i>
        </a>
        <h3
          style={{
            paddingBottom: "30px",
            marginTop: "-12px",
            fontFamily: "Verdana, sans-serif",
          }}
        >
          Click the graph icon to see more information
        </h3>
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
        <button className="btn btn-dark" style={{ marginBottom: "20px" }}>
          Back to Top
        </button>
      </a>
    </main>
  );
};

export default Main;
