const express = require("express");
const aboutController = require("../controllers/aboutController.js");

const router = express.Router();

router.get("/about", aboutController.getabout);

module.exports = router;
