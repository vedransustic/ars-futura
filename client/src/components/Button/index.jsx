import React from "react";
import "./index.css";

const NewListButton = ({ text, disable }) => {
  return (
    <button className="button" disabled={disable}>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default NewListButton;
