import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img
            className="image__logo"
            src="https://img.freepik.com/free-photo/burger-with-fries_181624-2761.jpg?w=2000"
            alt="logo"
          />
        </div>

        <div className="navbar__menu">
          <ul className="navbar__list">
            <li className="navbar__links">
              <Link className="navbar__link" href="#">
                About
              </Link>
            </li>
            <li className="navbar__links">
              <Link className="navbar__link" href="#">
                Menu
              </Link>
            </li>
            <li className="navbar__links">
              <Link className="navbar__link" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
