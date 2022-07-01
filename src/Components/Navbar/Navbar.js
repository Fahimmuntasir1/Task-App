import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex justify-center">
        <Link className="p-2 border bg-emerald-500 text-white my-2" to="/">
          ToDo
        </Link>
        <Link className="p-2 border bg-emerald-500 text-white my-2" to="/task">
          Complete Task
        </Link>
        <Link
          className="p-2 border bg-emerald-500 text-white my-2"
          to="/calendar"
        >
          Calendar
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
