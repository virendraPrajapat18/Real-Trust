const express = require("express");
const router = express.Router();
const { addContact, getContacts } = require("../controllers/contactController");

router.post("/add", addContact);

router.get("/get", getContacts);

module.exports = router;
