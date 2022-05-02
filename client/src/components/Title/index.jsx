import React, { memo } from "react";
import "./index.scss";

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

export const MemoTitle = memo(Title);
