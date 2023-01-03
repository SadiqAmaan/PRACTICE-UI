import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const services = () => {
  return (
    <div className="services">
      <Carousel className="carousel"
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={3000}
        showThumbs={false}
      >
        <div className="slide">
          <img src="https://source.unsplash.com/1920x1080/?gadgets" alt="" />
          <p className="legend">EXCLUSIVE GADGETS</p>
        </div>
        <div className="slide">
          <img src="https://source.unsplash.com/1920x1080/?gadget" alt="" />
          <p className="legend">LATEST TECH</p>
        </div>
        <div className="slide">
          <img src="https://source.unsplash.com/1920x1080/?iphone" alt="" />
          <p className="legend">PREMIUM DEVICES</p>
        </div>
        <div className="slide">
          <img src="https://source.unsplash.com/1920x1080/?computer" alt="" />
          <p className="legend c-text">THE PERFECT TECH EXPERIENCE</p>
        </div>
      </Carousel>
    </div>
  );
};

export default services;
