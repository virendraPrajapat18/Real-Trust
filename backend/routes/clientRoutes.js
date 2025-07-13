const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const { addClient, getClients } = require("../controllers/clientController");

router.post("/add", upload.single("image"), addClient);

router.get("/get", getClients);

module.exports = router;
