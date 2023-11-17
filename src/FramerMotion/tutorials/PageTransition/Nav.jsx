import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul class="nav justify-content-center  ">
      <li class="nav-item">
        <Link to="/" className="px-3">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="/about" className="px-3">About</Link>
      </li>
    </ul>
  );
};

export default Nav;
