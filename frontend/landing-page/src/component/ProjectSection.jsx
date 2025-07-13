import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://real-trust-2yfz.onrender.com/api/projects/get") // ✅ replace with your real backend URL
      .then((res) => setProjects(res.data.data))
      .catch((err) => console.error("Failed to fetch projects", err));
  }, []);

  return (
    <section className="py-16 bg-blue-50 px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-700">Our Projects</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          We know what buyers are looking for and suggest projects that will
          bring clients top dollar for the sale of their homes.
        </p>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={`https://real-trust-2yfz.onrender.com/uploads/${project.image}`}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {project.description?.slice(0, 80)}...
                </p>
              </div>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                SEE MORE
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
