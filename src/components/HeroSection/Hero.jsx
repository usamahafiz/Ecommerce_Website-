import React from "react";
import Carousel from "react-bootstrap/Carousel"; 
import ExampleCarouselImage from "./ExampleCarouselImage";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";  

const slides = [
  {
    src: "https://utero-ninethemes.myshopify.com/cdn/shop/files/slider-01_a4292ba2-47d5-403b-937f-a61d91484018_2000x.jpg?v=1729682864",
    subtitle: "Up To 60% Off Now",
    label: "Mid Season Sale 40%",
    description: "New Collection 'The Essential' with basic necessary products.",
  },
  {
    src: "https://utero-ninethemes.myshopify.com/cdn/shop/files/banner-01_4f442f1f-6a37-4235-9b2d-4a4c1fec8458_1500x.jpg?v=1729691747",
    subtitle: "Fall Summer Clearance",
    label: "Casual Line. Stunning Design",
    description: "New Collection 'The Essential' with basic necessary products",
  },
  {
    src: "https://utero-ninethemes.myshopify.com/cdn/shop/files/banner-03_909a56d1-7332-4eaa-acf2-7caa0b70c00f_1500x.jpg?v=1729607647",
    subtitle: "Glossy Puffer Jacket",
    label: "Enjoy The Season Sale",
    description: "New Collection 'The Essential' with basic necessary products",
  }, 
  // {
  //   src: "https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/banner2.jpg",
  //   subtitle: "Up To 60% Off Now",
  //   label: "Enjoy The Season Sale",
  //   description: "Final Clearance: Take 20% off Sale Must-Haves.",
  // },
];

function Hero() {
  return (
    <Carousel className="carousels">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <ExampleCarouselImage imageSrc={slide.src} /> 
          <Carousel.Caption className="carousel-caption-center">
            <p id="des">{slide.subtitle}</p>
            <h1>{slide.label}</h1>
            <p>{slide.description}</p>
            <Link to="/register">
              <button className="btn btn-danger" >
                Buy Now<FaArrowRight style={{ paddingLeft: "5px" }} />
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Hero;
