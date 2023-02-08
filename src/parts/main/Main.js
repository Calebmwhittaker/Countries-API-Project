import React from "react";
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
          onChange={handleChange}
          placeholder="Search countries by name, city, and languages"
        />
        <i
          style={{
            fontSize: "60px",
            marginBottom: "20px",
            color: "#459dfb",
          }}
          onClick={handleClick}
          className="fa-solid fa-chart-simple"
        />
      </div>
      <div
        style={{ justifyContent: "space-around" }}
        className="row m-auto countries-container"
      >
        <Countries CountriesData={CountriesData} />
      </div>
      <div className="graph-container">
        {graph && <Graph data={data} query={query} />}
      </div>
    </main>
  );
};

export default Main;
