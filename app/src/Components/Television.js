import React from "react";
import "./Television.css";

function Television({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.image.original} alt="show" />
    </div>
  );
}

export default Television;
