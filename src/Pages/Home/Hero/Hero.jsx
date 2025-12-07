import React from "react";
import heroImg from '../../../assets/heroBook.png'

const Hero = () => {
  return (
    <div className="relative w-full min-h-[85vh] bg-[#070707] text-center px-3 flex flex-col items-center justify-center">

      <h1 className="text-3xl md:text-5xl text-yellow-500 font-bold mb-4">
        The Book Lover's Dreamland Awaits!
      </h1>

      <p className="text-gray-300 max-w-xl leading-relaxed mb-6 text-sm md:text-lg">
        Welcome to the ultimate book lover's paradise! Join our community and contribute to a
        world of stories!
      </p>

      <div className="flex gap-2 mb-10">
        <input type="text" placeholder="Search a book…" className="px-4 py-2 rounded-lg border bg-black border-yellow-600 text-white w-64"/>
        <button className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded-lg text-black font-semibold">
          Search
        </button>
      </div>

      <img src={heroImg} className="w-[280px] md:w-[450px]" alt="" />
    </div>
  );
};

export default Hero;
