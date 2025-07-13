const Newsletter = require("../models/newsLetter");



const addSubscriber = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const alreadyExists = await Newsletter.findOne({ email });
    if (alreadyExists) {
      return res.status(409).json({ message: "Already subscribed" });
    }

    const subscriber = new Newsletter({ email });
    await subscriber.save();
    res.status(201).json({
      success:true,
      message:"Subscribed successfully!",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });
    res.status(200).json({
      success:true,
      data: subscribers
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


module.exports = {addSubscriber,getSubscribers}