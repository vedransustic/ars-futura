import React, { memo } from "react";
import "./index.scss";

const Button = ({ text, disable, onClick }) => {
  return (
    <button className="button" disabled={disable} onClick={onClick}>
      <span className="button-text">{text}</span>
    </button>
  );
};

export const MemoButton = memo(Button);
