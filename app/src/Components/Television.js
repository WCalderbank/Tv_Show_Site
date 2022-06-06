import React from "react";
import "./Television.css";

function Television({ data }) {
  return (
    <>
      <div className="show_info">
        <h2>{data.name}</h2>
        <img src={data.image} alt="show" />
        <div className="genre-box">
          <h3>{data.genres[0]}</h3>
          <h3>{data.genres[1]}</h3>
          <h3>{data.genres[2]}</h3>
          <h3>{data.genres[3]}</h3>
        </div>
        <h1> STATUS: {data.status}</h1>
      </div>
    </>
  );
}

export default Television;
