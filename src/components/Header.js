import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Tour of heroes</h1>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/heroes">Heroes</Link>
  </header>
);

export default Header;
