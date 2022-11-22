import React from "react";

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
              <a className="navbar__link" href="#">
                Home
              </a>
            </li>
            <li className="navbar__links">
              <a className="navbar__link" href="#">
                About
              </a>
            </li>
            <li className="navbar__links">
              <a className="navbar__link" href="#">
                Menu
              </a>
            </li>
            <li className="navbar__links">
              <a className="navbar__link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
