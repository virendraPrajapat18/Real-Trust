import React from "react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white text-center px-4">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-blue-700 mb-2">About Us</h2>
      <div className="h-1 w-12 bg-blue-600 mx-auto mb-6 rounded"></div>

      {/* Paragraph */}
      <p className="max-w-2xl mx-auto text-gray-700 mb-8">
        Fifteen years of experience in real estate, excellent customer service,
        and a commitment to work hard, listen, and follow through. We provide
        quality service to build relationships with clients and, more
        importantly, maintain those relationships by communicating effectively.
      </p>

      {/* Button */}
      <Button
        variant="ghost"
        className="border-b-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-6"
      >
        LEARN MORE
      </Button>
    </section>
  );
};

export default AboutUs;
