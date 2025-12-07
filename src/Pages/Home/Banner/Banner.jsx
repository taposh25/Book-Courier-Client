import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import book1 from "../../../assets/Python_Learning.jpg";
import book2 from "../../../assets/machine_Learning.jpg";
import book3 from "../../../assets/Javascript_Learning.jpeg";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router";

const Banner = () => {
  const slides = [
    {
      image: book1,
      title: "Python Learning",
      description: "Master Python with practical examples and projects.",
      link: "/books",
    },
    {
      image: book2,
      title: "Machine Learning",
      description: "Step by step guide to become a Machine Learning expert.",
      link: "/books",
    },
    {
      image: book3,
      title: "JavaScript Learning",
      description: "Learn JavaScript from beginner to advanced level.",
      link: "/books",
    },
  ];

  return (
    <div className="w-full mt-8">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={2000}
        swipeable
        emulateTouch
        showArrows={true}
        dynamicHeight={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full flex justify-center">
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full max-h-[600px] md:max-h-[700px] object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 py-4 md:py-8 bg-black bg-opacity-20">
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg text-white mb-4 md:mb-6 drop-shadow-md">
                {slide.description}
              </p>
              <Link to={slide.link}>
                <button className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-2 md:py-3 rounded-3xl font-bold text-sm md:text-lg transition">
                  See All Books
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
