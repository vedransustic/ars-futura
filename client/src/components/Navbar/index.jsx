import React from "react";
import "./index.css";
import Logo from "../Logo";

const Navbar = ({ user }) => {
  return (
    <nav>
      <Logo />
      <h2>{user}</h2>
    </nav>
  );
};

export default Navbar;
