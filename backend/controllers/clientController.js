const Client = require("../models/client");


const addClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    const image = req.file?.filename;

    if (!name || !description || !designation || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const client = new Client({ name, description, designation, image });
    await client.save();
    res.status(201).json({
      success:true,
      message:"Client added successfully!",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.status(200).json({
      success:true,
      data:clients,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


module.exports = {addClient,getClients};