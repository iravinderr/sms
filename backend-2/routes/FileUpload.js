const express = require("express");
const router = express.Router();
const { imageUpload } = require("../controllers/fileUpload");

// Define the post route with a callback function
router.post("/imageUpload", imageUpload);

module.exports = router;
