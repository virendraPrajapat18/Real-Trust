const Contact = require("../models/contact");


const addContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    if (!fullName || !email || !mobile || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = new Contact({ fullName, email, mobile, city });
    await contact.save();
    res.status(201).json({
      success:true,
      message:"Contact added successfully!",
      
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success:true,
      data:contacts
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



module.exports = {addContact,getContacts}