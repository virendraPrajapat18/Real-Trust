import React, { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  PenTool,
  DollarSign,
  Users,
  TrendingUp,
  Lightbulb,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Home className="w-10 h-10 text-blue-600" />,
    title: "Potential ROI",
    desc: "We help maximize returns by identifying high-growth property opportunities.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-blue-600" />,
    title: "Design",
    desc: "Modern, practical design consultations tailored to increase appeal and value.",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-blue-600" />,
    title: "Marketing",
    desc: "Digital-first marketing approach to attract the right buyers and sellers fast.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Expert Team",
    desc: "A network of vetted agents, designers, and analysts who guide your journey.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
    title: "Analytics",
    desc: "Insights that help you make informed buying, selling, and investment decisions.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
    title: "Innovation",
    desc: "Smart tools and features that help you gain an edge over traditional agents.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    title: "Business Growth",
    desc: "We align property deals with your long-term personal or business goals.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "Trust & Safety",
    desc: "Secure and transparent process with verified documentation and agent reviews.",
  },
];

const WhyChooseUs = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = window.innerWidth > 1024 ? 400 : 250;
    if (direction === "left") container.scrollLeft -= scrollAmount;
    else container.scrollLeft += scrollAmount;
  };

  return (
    <section className="py-16 bg-white relative">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
        Why Choose Us?
      </h2>

      {/* Scroll Buttons */}
      <div className="absolute left-4 top-[50%] transform -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-white shadow-md rounded-full"
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="absolute right-4 top-[50%] transform -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-white shadow-md rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-8 scroll-smooth scrollbar-hide"
      >
        {features.map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] max-w-[320px] lg:min-w-[350px] lg:max-w-[350px] h-[320px] bg-white shadow-xl border border-gray-200 p-6 rounded-xl text-center shrink-0 flex flex-col"
          >
            {/* Top Half – Icon + Title */}
            <div className="flex-1 flex flex-col items-center justify-center mb-4">
              <div className="mb-2">{item.icon}</div>
              <h3 className="text-lg font-semibold text-blue-700">
                {item.title}
              </h3>
            </div>

            {/* Bottom Half – Description */}
            <div className="flex-1 text-sm text-gray-600 flex items-start justify-center">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
