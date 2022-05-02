import React, { memo } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { APP_LISTS_URL } from "../../const/routes";

const Logo = () => (
  <Link to={APP_LISTS_URL}>
    <h1 className="logo">Too Doo</h1>
  </Link>
);

export const MemoLogo = memo(Logo);
