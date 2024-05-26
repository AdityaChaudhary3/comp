// ImageSlider.js


// first we have to install the following package
// npm install react-slick slick-carousel

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../public/Images/1.png'
import '../../public/Images/2.jpg'
import '../../public/Images/2.jpg'
import '../../public/Images/4.jpg'
// import images from '../../public/Images'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    "../../public/Images/3.jpg",
    "../../public/Images/1.png",
    "../../public/Images/3.jpg",
    "../../public/Images/4.jpg",
    "../../public/Images/1.png",
  ];

  return (
    <div style={{ width: "100%", height: "70vh" }}>
    <Slider {...settings} >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`}  style={{ width: "100%", height: "60vh" }}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
