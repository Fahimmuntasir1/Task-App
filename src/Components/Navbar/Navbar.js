import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <Link to="/task">Complete Task</Link>
      <Link to="/calendar">Calendar</Link>
    </nav>
  );
};

export default Navbar;
