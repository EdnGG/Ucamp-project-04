import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="carousel__img d-block w-100 h-80"
          src="img/carousel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>label 1</h3>
          <p>image 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel__img d-block w-100 h-80"
          src="img/carousel2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>label 2</h3>
          <p>image 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel__img d-block w-100 h-80"
          src="img/carousel4.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>label 3</h3>
          <p>image 3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
