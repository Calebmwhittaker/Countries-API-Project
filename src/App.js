import React, { useState, useEffect } from "react";
import axios from "axios";
import "./assets/styles/App.css";
import Header from "./parts/header/Header.js";
import Main from "./parts/main/Main.js";
import Footer from "./parts/footer/Footer.js";

const App = () => {
  const [data, setData] = useState([]);
  const [graph, setGraph] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const response = await axios.get(url);
    setData(response.data);
  };

  const handleClick = () => {
    setGraph(graph ? false : true);
  };

  const handleChange = (e) => setQuery(e.target.value);

  const headerData = {
    title: "World Countries Data",
    subtitle: `There are ${data.length} countries in the world`,
  };

  const mainData = {
    query: query,
    data: data,
    handleClick: handleClick,
    handleChange: handleChange,
    graph: graph,
  };

  return (
    <div
      style={{ textAlign: "center", boxSizing: "border-box" }}
      className="app"
    >
      <Header headerData={headerData} />
      <Main mainData={mainData} />
      <Footer />
    </div>
  );
};

export default App;
