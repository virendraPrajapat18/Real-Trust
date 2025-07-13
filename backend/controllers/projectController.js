const Project = require("../models/project");


const addProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file?.filename;

    if (!name || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const project = new Project({ name, description, image });
    await project.save();
    res.status(201).json({
      success: true,
      message:"Project successfully Added!",
      
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({
      success:true,
      data: projects
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {addProject,getProjects}