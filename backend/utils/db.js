const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB connected succesfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;