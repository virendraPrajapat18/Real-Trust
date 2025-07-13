const express = require("express");
const router = express.Router();
const {
  addSubscriber,
  getSubscribers,
} = require("../controllers/newsLetterController");

router.post("/add", addSubscriber);

router.get("/get", getSubscribers);

module.exports = router;
