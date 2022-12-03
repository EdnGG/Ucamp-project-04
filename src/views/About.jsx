import React from "react";
import Button from "react-bootstrap/Button";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      About
      <div>
        <Link to="/" className="navbar__link" href="#">
          <Button variant="primary" type="button">
            Go back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
