import React from "react";
import "./index.css";

const NewListButton = ({ text, disable, onClick }) => {
  return (
    <button className="button" disabled={disable} onClick={onClick}>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default NewListButton;
