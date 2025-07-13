import React from "react";

const DesignShowcase = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="flex justify-center items-center gap-6 flex-wrap md:flex-nowrap px-6">
        {/* Left Image */}
        <div className="relative">
          <img
            src="s-1.svg" // Replace with your image
            alt="design-1"
            className="w-36 h-36 object-cover rounded shadow-md"
          />
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-500 rounded-sm"></div>
        </div>

        {/* Center (Main) Image */}
        <div className="relative z-10">
          <img
            src="s-2.svg"
            alt="design-main"
            className="w-64 h-64 object-cover rounded shadow-xl"
          />
          <div className="absolute -top-4 -right-4 w-4 h-4 bg-blue-600 rounded-sm"></div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="s-3.svg"
            alt="design-2"
            className="w-36 h-36 object-cover rounded shadow-md"
          />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-orange-500 rounded-sm"></div>
        </div>
      </div>

      {/* Background decorations (circles/squares) */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-20" />
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-100 rounded-full opacity-10" />
      <div className="absolute top-32 right-32 w-3 h-3 bg-gray-300 rounded-sm opacity-50" />
      <div className="absolute bottom-10 left-32 w-2 h-2 bg-gray-300 rounded-sm opacity-50" />
    </section>
  );
};

export default DesignShowcase;
