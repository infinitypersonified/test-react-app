import React from "react";

const NewsletterSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-10">
      <div className="bg-blue-600 rounded-2xl overflow-hidden ">
        <div className="relative md:px-16 py-16 px-6 md:py-24">
          {/* Background gradient*/}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between lg:gap-12 gap-8">
            {/* left content */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-semibold text-white">
                Subscribe to our newsletter
              </h2>
              <p className="text-sm text-blue-100 sm:text-base">
                Stay updated with the latest news and offers.
              </p>
            </div>

            {/* right content */}
            <div className="mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-full bg-white sm:w-auto  md:w-80 px-4 sm:px-6 py-3 border-none rounded-xl sm:rounded-l-xl sm:rounded-r-none border  focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-500 text-white w-full sm:w-auto sm:px-8 px-6 py-3 rounded-3xl font-semibold sm:rounded-l-none sm:rounded-r-xl cursor-pointer btn"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
        </style>
    </section>
  );
};

export default NewsletterSection;
