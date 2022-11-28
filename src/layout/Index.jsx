import React from "react";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Footer from "../components/Footer";
import CarouselFade from "../components/CarouselFade";
// import Data from "../components/Data";

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
          <Register />
          {/* <Data /> */}
        </div>
      </div>

      <div className="container__footer">
        <Footer />
      </div>
    </>
  );
};

export default index;
