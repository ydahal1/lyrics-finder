import React from "react";
import "./spinner.css";
import spinner from "../../assets/images/spinner.gif";

function Spinner() {
  return (
    <div className="spinner">
      <img src={spinner} alt="loading" />
    </div>
  );
}

export default Spinner;
