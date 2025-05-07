import React from "react";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section id="home" className=" container mx-auto pt-20 flex flex-col md:flex-row justify-around items-center pb-6 sm:px-6 lg:px-8">
      {/*  left col */}
      <div className="w-full md:w-1/2 space-y-8 ">
        {/*star badge*/}
        <div
          className="flex items-center gap-2 bg-gray-100 w-fit px-4 py-1 rounded-full hover:bg-gray-300 
           transition-colors cursor-pointer group"
        >
          <span className="text-blue-600 hover-text group-hover:scale-110 transition-transform">
            ★
          </span>
          <span className="text-sm font-medium">Jump start your growth</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          We boost the growth for
          <span className="text-blue-600 relative inline-block">
            Startup to Fortune 500
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-200/60  "></span>
          </span>{" "}
          Companies
          <span className="inline-block ml-2 animate-pulse">⏰</span>
        </h1>

        <p className="text-gray-700 text-md md:text-lg max-w-xl">
          Get accurate leads, sales people training and conversions, tools and
          more - all within the same one billing
        </p>

        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="w-[300px] px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-xl cursor-pointer 
          transition-all active:scale-95 custom5-hover"
          >
            {" "}
            →
          </button>
        </div>
      </div>

      {/* right col */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
        <div className="relative ">
          <img
            src={heroImage}
            alt="hero image"
            className="rounded-lg h-110 w-full mt-10 relative z-10 custom6-hover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
