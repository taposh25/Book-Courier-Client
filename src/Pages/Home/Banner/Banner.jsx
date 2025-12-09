import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import book1 from '../../../assets/book1.png';
import book2 from '../../../assets/book2.png';
import book3 from '../../../assets/book3.png';
import book4 from '../../../assets/book4.png';
import { Link } from "react-router";

const Banner = () => {
  const books = [
    {
      img: book1,
      title: "Thunmanhandiya",
      desc: "A beautiful poetic literature piece.",
      writer: "Mahagamasekara",
      id: 1
    },
    {
      img: book2,
      title: "Gamperaliya",
      desc: "A masterpiece of Sri Lankan history.",
      writer: "Martin Wickramasinghe",
      id: 2
    },
    {
      img: book3,
      title: "Nectar in a Sieve",
      desc: "A story about Indian struggle and life.",
      writer: "Kamala Markandaya",
      id: 3
    },
    {
      img: book4,
      title: "Adaraneeya Victoria",
      desc: "A romantic and emotional Sri Lankan novel.",
      writer: "Mohan Raj Madawala",
      id: 4
    },
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-3xl font-bold mb-6">
        Our Best Picks
      </h2>

      <div className="max-w-5xl mx-auto px-4">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
        >
          {books.map((b) => (
            <div key={b.id} className="flex justify-center">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full">

                {/* Bigger image that fits */}
                <div className="flex justify-center">
                  <img
                    src={b.img}
                    className="rounded-xl w-[360px] h-[480px] object-contain"
                    alt={b.title}
                  />
                </div>

                <h3 className="mt-4 text-xl text-secondary font-bold text-center">
                  {b.title}
                </h3>

                <p className="text-gray-500 text-sm text-center">
                  {b.writer}
                </p>

                <p className="text-gray-700 text-center my-2">
                  {b.desc}
                </p>

                <div className="flex justify-center mt-3 mb-3">
                 <Link to="/all-books">
                  <button className=" cursor-pointer px-5 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/80">
                    All books 
                  </button>
                 </Link>
                </div>

              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Banner;
