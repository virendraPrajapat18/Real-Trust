import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      const res = await axios.post("https://real-trust-2yfz.onrender.com/api/newsletter/add", {
        email,
      });

      if (res.data.success) {
        setStatus("subscribed");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        setStatus("duplicate");
      } else {
        setStatus("error");
      }
    }
  };

  return (
    <div className="bg-blue-50 py-10 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get updates, tips, and offers straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="w-full">
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <Button
            type="submit"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white mt-2 sm:mt-6"
          >
            Subscribe
          </Button>
        </form>

        {status === "subscribed" && (
          <p className="text-green-600 mt-4">Thank you for subscribing!</p>
        )}
        {status === "duplicate" && (
          <p className="text-yellow-600 mt-4">You're already subscribed.</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-4">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
