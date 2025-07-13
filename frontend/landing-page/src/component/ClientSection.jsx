import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("https://real-trust-2yfz.onrender.com/api/clients/get") 
      .then((res) => setClients(res.data.data))
      .catch((err) => console.error("Error fetching clients", err));
  }, []);

  return (
    <section className="py-16 bg-white px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-700">Happy Clients</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Hear what our satisfied clients have to say about their experience
          with our service.
        </p>
      </div>

      <div className="relative">
        {/* Slider container */}
        <div className="flex gap-6 overflow-x-auto pb-4 px-2 scroll-smooth snap-x snap-mandatory">
          {clients.map((client) => (
            <div
              key={client._id}
              className="min-w-[280px] max-w-[280px] bg-blue-50 p-6 rounded-xl shadow-lg text-center flex-shrink-0 snap-start"
            >
              <img
                src={`https://real-trust-2yfz.onrender.com/uploads/${client.image}`}
                alt={client.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
              />
              <h3 className="text-lg font-semibold text-blue-800">
                {client.name}
              </h3>
              <p className="text-sm text-gray-500">{client.designation}</p>
              <p className="text-sm text-gray-600 mt-2">
                {client.description?.slice(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
