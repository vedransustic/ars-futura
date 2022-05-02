import React, { memo } from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <h1>Too Doo</h1>
      <p>Your to-dos have never been simpler.</p>
    </footer>
  );
};

export const MemoFooter = memo(Footer);
