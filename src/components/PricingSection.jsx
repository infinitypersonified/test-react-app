import React, { useState } from "react";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  //calculateproduct price based on product count
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Pricing
        </h2>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mb-12">
          {/* starter Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl text-gray-600 mb-3">Starter</h3>
            <p className="text-2xl font-bold mb-6">Price: ${starterPrice}</p>
          </div>

          {/* Business Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl text-gray-600 mb-3">Business</h3>
            <p className="text-2xl font-bold mb-6">Price: ${businessPrice}</p>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-3">
            {productCount} products
          </p>
          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <input
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                type="range"
                min="1"
                max="50"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
              />
             <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </div>
        </div>

         <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-3">
                Ready to get started?
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg custom7-hover ">Get Started</button>
         </div>

      </div>

    </section>
  );
};

export default PricingSection;
