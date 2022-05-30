import React, { useState, useEffect } from "react";
import "./App.css";
import Television from "./Components/Television";

function App() {
  const [tvData, setTvData] = useState({});
  async function dataFetch() {
    const response = await fetch("https://api.tvmaze.com/shows/500");
    const data = await response.json();
    console.log(data);
    setTvData(data);
  }
  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="App">
      <h1>Tv Encyclopedia</h1>
      <form>
        <input type="text" placeholder="Search Here" />
      </form>
      <Television data={tvData} />
    </div>
  );
}

export default App;
