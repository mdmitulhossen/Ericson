import React from "react";
import IconNav from "../Icon Nav/IconNav";
import LeftNav from "./../LeftNav/LeftNav";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="Nav">
      <IconNav/>
      <LeftNav/>
    </div>

  );
};

export default Navbar;
