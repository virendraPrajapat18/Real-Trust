const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser"); 
const dotenv = require("dotenv");
// const path = require("path");

const projectRouter = require("./routes/projectRoutes")
const clientRouter = require("./routes/clientRoutes")
const contactRouter = require("./routes/contactRoutes")
const newsLetterRouter = require("./routes/newsLetterRoutes");

const connectDB = require("./utils/db.js");


dotenv.config({});

const app = express();
const PORT = process.env.PORT || 5000 ;


app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);


app.use(cookieParser());
app.use(express.json());

const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use("/api/projects", projectRouter);
app.use("/api/clients", clientRouter);
app.use("/api/contacts", contactRouter);
app.use("/api/newsletter", newsLetterRouter);


app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at PORT:${PORT}`);
});