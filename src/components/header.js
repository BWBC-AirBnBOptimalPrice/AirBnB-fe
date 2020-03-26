import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/createhome">Create Home</Link>
      <Link to = "/viewproperties">View Properties!</Link>
    </div>
  );
}

export default Header;
