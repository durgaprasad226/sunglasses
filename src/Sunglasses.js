import React from "react";
import "./Sunglasses.css";

function Sunglasses(glasses) {
  return (
    <div className="sunglasses-card">
      <img src={glasses.ImagePath} alt={glasses.ImagePath}></img>
      <strong>
        <p style={{ color: "orange" }}>{glasses.Brand}</p>
      </strong>
      <p>{glasses.Model}</p>
      <strong>
        <p>{glasses.Price}</p>
      </strong>
    </div>
  );
}

export default Sunglasses;
