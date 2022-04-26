import React from "react";
import "./index.css";

const NewListButton = ({ text }) => {
  return (
    <button className="button">
      <span className="button-text">{text}</span>
    </button>
  );
};

export default NewListButton;
