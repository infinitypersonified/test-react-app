import React from "react";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";
import woocommerce from "../assets/woocommerce.png";

const Companylogo = () => {
  const logos = [slack, amazon, meundies, sitepoint, woocommerce];
  return (
    <div className="w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start px-4 sm:px-6 lg:px-8">
      <div
        className="w-[300px] shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white px-4 py-2 z-10 
        sm:text-base text-xl font-semibold text-left"
      >
        Proud partner at <br /> Hubspot & Segment
      </div>
      <div className="flex whitespace-nowrap animate-marquee">
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`} // Corrected the key
            src={logo}
            alt="company logos"
            className="mx-12 h-8 w-36 obj-contain grayscale opacity-70 custom-hover"
          />
        ))}

        {/* Duplicate logo */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index + logos.length}`} // Corrected the key
            src={logo}
            alt="company logos"
            className="mx-12 h-8 w-36 obj-contain grayscale opacity-70 custom-hover"
          />
        ))}
      </div>
    </div>
  );
};

export default Companylogo;
