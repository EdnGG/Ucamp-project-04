import React from "react";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Contact from "../views/Contact";
import Footer from "../components/Footer";
import CarouselFade from "../components/CarouselFade";
// import Data from "../components/Data";
import CardDescription from "../components/CardDescription";
import CardForm from "../components/CardForm";

const index = () => {
  return (
    <>
      <div className="container__navbar">
        <Navbar />
      </div>

      <div className="container__main">
        <div className="carousel">
          <CarouselFade />
        </div>

        <div className="card-description">
          <CardDescription />
          {/* <Register /> */}
          {/* <Data /> */}
        </div>
      </div>

      <div className="container__sub-main">
        <div className="card-form">
          <CardForm />
        </div>

        <div className="form-user">
          {/* <Register /> */}
          <Contact />
        </div>
      </div>

      <div className="container__footer">
        <Footer />
      </div>
    </>
  );
};

export default index;
