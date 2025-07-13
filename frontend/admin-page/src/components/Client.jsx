import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Client = () => {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    description: "",
    image: null,
  });

  const fetchClients = async () => {
    try {
      const res = await axios.get("https://real-trust-2yfz.onrender.com/api/clients/get");
      setClients(res.data.data); 
    } catch (error) {
      console.error("Failed to load clients:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("designation", formData.designation);
    form.append("description", formData.description);
    form.append("image", formData.image);

    try {
      await axios.post("https://real-trust-2yfz.onrender.com/api/clients/add", form);
      alert("Client added successfully!");
      setFormData({ name: "", designation: "", description: "", image: null });
      fetchClients();
    } catch (error) {
      console.error("Failed to add client:", error);
      alert("Error adding client.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">All Clients</h2>

      {/* Client Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {clients && clients.length > 0 ? (
          clients.map((client) => (
            <div
              key={client._id}
              className="bg-blue-50 p-4 rounded-xl shadow-md text-center"
            >
              <img
                src={`http://localhost:7000/uploads/${client.image}`}
                alt={client.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3 border-4 border-white shadow"
              />
              <h3 className="text-lg font-semibold text-blue-800">
                {client.name}
              </h3>
              <p className="text-sm text-gray-500">{client.designation}</p>
              <p className="text-sm text-gray-600 mt-1">
                {client.description?.slice(0, 100)}...
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No clients found.
          </p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl bg-white shadow-md border border-gray-200 p-8 rounded-xl space-y-5 mb-10 transition-all duration-300"
      >
        <h3 className="text-xl font-bold text-blue-800 mb-4">Add New Client</h3>

        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name
          </Label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter full name"
            className="bg-gray-50 border-gray-300 focus:border-blue-500"
          />
        </div>

        {/* Designation */}
        <div className="space-y-2">
          <Label
            htmlFor="designation"
            className="text-sm font-medium text-gray-700"
          >
            Designation
          </Label>
          <Input
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
            placeholder="e.g. CEO, Founder"
            className="bg-gray-50 border-gray-300 focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Description
          </Label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Write a few lines about the client..."
            className="bg-gray-50 border-gray-300 focus:border-blue-500"
          />
        </div>

        {/* Image Upload */}
        <div className="space-y-2">
          <Label htmlFor="image" className="text-sm font-medium text-gray-700">
            Upload Image
          </Label>
          <Input
            type="file"
            name="image"
            onChange={handleChange}
            required
            className="bg-white border-gray-300 file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-1 file:rounded-md file:cursor-pointer"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
        >
          Add Client
        </Button>
      </form>
    </div>
  );
};

export default Client;
