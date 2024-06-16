import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="mx-auto mt-[-96px] flex h-screen w-full max-w-[800px] flex-col justify-center text-center">
        <p className="p-2 font-bold text-[#00df9a]">Growing with Us</p>
        <h1 className="text-4xl font-bold sm:text-6xl md:py-6 md:text-7xl">
          Join us for better future!
        </h1>
        <div className="flex items-center justify-center">
          <p className="py-4 text-xl font-bold sm:text-4xl md:text-5xl">
            Fast, flexible for
          </p>
          <ReactTyped
            className="pl-2 text-xl font-bold text-[#f45353] sm:text-4xl md:text-5xl"
            strings={["Business", "Works", "Projects"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <p className="text-xl font-bold text-gray-500 md:text-2xl">
          Let's discuss for your need
        </p>
        <button className="mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] py-3 text-black">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Hero;
