import React, { memo } from "react";
import "./index.scss";
import { Logo } from "..";
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

export const MemoNavbar = memo(Navbar);
