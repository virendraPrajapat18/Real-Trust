import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ProjectAdminPage = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });


  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        "http://localhost:7000/api/projects/get"
      );
      setProjects(res.data.data);
    } catch (error) {
      console.error("Failed to load projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
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
    form.append("description", formData.description);
    form.append("image", formData.image);

    try {
      await axios.post("http://localhost:7000/api/projects/add", form);
      alert("Project added successfully!");
      setFormData({ name: "", description: "", image: null });
      fetchProjects(); 
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-blue-700 mb-6">All Projects</h2>

      {/* Project List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project._id}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <img
                src={`http://localhost:7000/uploads/${project.image}`}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-700">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {project.description?.slice(0, 100)}...
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No projects found.
          </p>
        )}
      </div>

      {/* Add Project Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl bg-white shadow-md border border-gray-200 p-8 rounded-xl space-y-5 mb-10 transition-all duration-300"
      >
        <h3 className="text-xl font-bold text-blue-800 mb-4">
          Add New Project
        </h3>

        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Project Name
          </Label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter project title"
            className="bg-gray-50 border-gray-300 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Project Description
          </Label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Enter project details..."
            className="bg-gray-50 border-gray-300 focus:border-blue-500"
          />
        </div>

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
          Add Project
        </Button>
      </form>
    </div>
  );
};

export default ProjectAdminPage;
