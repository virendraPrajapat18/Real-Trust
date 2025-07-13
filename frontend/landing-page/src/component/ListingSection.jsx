import React from "react";
import { Button } from "@/components/ui/button";

const ListingSection = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px]">
      {/* Background Image */}
      <img
        src="Rectangle.svg" // replace with your image
        alt="listing"
        className="w-full h-full object-cover"
      />

      {/* Centered Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-lg md:text-2xl font-medium max-w-xl">
          Learn more about our listing process, as well our additional staging
          and design work.
        </p>
        <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default ListingSection;
