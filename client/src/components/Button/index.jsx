import React from "react";
import "./index.css";

const NewListButton = ({ text }) => {
  return (
    <button className="new-list">
      <span className="button-text">{text}</span>
    </button>
  );
};

export default NewListButton;
