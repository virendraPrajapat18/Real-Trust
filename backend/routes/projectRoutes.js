const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const { addProject, getProjects } = require("../controllers/projectController");


router.post("/add", upload.single("image"), addProject);
router.get("/get", getProjects);

module.exports = router;
