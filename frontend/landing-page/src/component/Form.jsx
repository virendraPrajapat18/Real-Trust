import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Form = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://real-trust-2yfz.onrender.com/api/contacts/add", form, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Form submitted successfully!");
      setForm({ fullName: "", email: "", mobile: "", city: "" });
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/formImage.svg" // Replace with actual image
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.6]"
      />

      {/* Overlay */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20">
        {/* Left Text */}
        <div className="text-white max-w-md mt-16 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Consultation,
            <br />
            Design,
            <br />& Marketing
          </h1>
        </div>

        {/* Right Form */}
        <div className="bg-[#0b1f4d]/80 text-white backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md w-full border border-white mt-10 md:mt-0">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Get a Free Consultation
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-white">
                Full Name
              </Label>
              <Input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="bg-white text-black placeholder:text-gray-500 border border-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="bg-white text-black placeholder:text-gray-500 border border-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="mobile" className="text-white">
                Mobile Number
              </Label>
              <Input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                placeholder="e.g. 9876543210"
                className="bg-white text-black placeholder:text-gray-500 border border-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="city" className="text-white">
                City
              </Label>
              <Input
                name="city"
                value={form.city}
                onChange={handleChange}
                required
                placeholder="Your city"
                className="bg-white text-black placeholder:text-gray-500 border border-gray-300"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Get Quick Quote"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
