// src/Carousel.js
import { useState } from "react";
import "./index.css";
import Chevron from "./icons/Chevron";

const ACarousel = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="carousel">
      <div onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        <Chevron dir="right" />
      </div>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />
      <div onClick={nextSlide} className="carousel__btn carousel__btn--next">
        <Chevron dir="left" />
      </div>
    </div>
  );
};
export default ACarousel;

// https://blog.stackademic.com/mastering-react-carousel-building-dynamic-image-sliders-ee6089580152
