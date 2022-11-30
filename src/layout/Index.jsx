import React from "react";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
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

        <div className="form">
          <CardDescription />
          {/* <Register /> */}
          {/* <Data /> */}
        </div>
      </div>

      <div className="container__sub-main">
        <div className="form">
          <CardForm />
        </div>

        <div className="form-user">
          <Register />
        </div>
      </div>

      <div className="container__footer">
        <Footer />
      </div>
    </>
  );
};

export default index;
