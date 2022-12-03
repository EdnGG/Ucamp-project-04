import React from "react";
import { Link } from "react-router-dom";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#0a4275" }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="">
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Register for free</span>
            <Link to="/register" className="navbar__link" href="#">
              <MDBBtn type="button" outline color="light" rounded>
                Sign up!
              </MDBBtn>
            </Link>
          </p>
        </section>
      </MDBContainer>
      {/* poner los icons */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          https://github.com/EdnGG
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
