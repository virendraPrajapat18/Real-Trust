import React from "react";

const IntroSection = () => {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-blue-800">
            Not Your Average Realtor
          </h2>
          <p className="text-gray-600">
            Real estate is more than just buying properties. We focus on smart
            selling, design, and marketing strategies to get the most value for
            both buyers and sellers.
          </p>
        </div>

        {/* Right Images */}
        <div className="md:w-1/2 flex items-center justify-center gap-6 flex-wrap">
          <img
            src="/Ellipse11.svg" // replace with your images in public/
            alt="main"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
          <div className="flex flex-col gap-6">
            <img
              src="/Ellipse 12.svg"
              alt="img2"
              className="w-32 h-32 object-cover rounded-full shadow-lg"
            />
            <img
              src="/Ellipse 13.svg"
              alt="img3"
              className="w-32 h-32 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-blue-600 rounded-full"></div>
      <div className="absolute bottom-10 left-20 w-3 h-3 bg-orange-500 rounded-full"></div>
      <div className="absolute top-20 right-10 w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
    </section>
  );
};

export default IntroSection;
