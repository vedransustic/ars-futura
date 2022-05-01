import React from "react";
import { Title } from "../../components";
import { ERROR_TITLE, ERROR_PARAGRAPH } from "../../const";
import "./index.scss";

const Error = () => {
  return (
    <div className="error-container">
      <Title text={ERROR_TITLE} />
      <p>{ERROR_PARAGRAPH}</p>
    </div>
  );
};

export default Error;
