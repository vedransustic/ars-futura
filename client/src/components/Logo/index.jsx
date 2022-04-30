import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const LOGO = () => (
  <Link to="/lists">
    <h1 className="logo">Too Doo</h1>
  </Link>
);

export default LOGO;
