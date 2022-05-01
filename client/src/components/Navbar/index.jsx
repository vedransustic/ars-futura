import React from "react";
import "./index.scss";
import Logo from "../Logo";
import { useSelector } from "react-redux";

const Navbar = () => {
  const username = useSelector((state) => state.user.username);
  return (
    <nav>
      <Logo />
      <h2>{username}</h2>
    </nav>
  );
};

export default Navbar;
