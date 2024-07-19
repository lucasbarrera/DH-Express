const express = require("express");
const homeController = require("../controllers/mainControllers.js");
const aboutController = require("../controllers/aboutController.js");

const router = express.Router();

router.get("/", homeController.gethome); //hace peticion de funcion get al controlador mainControllers.js
router.get("/about", aboutController.getabout); // hace peticion de funcion get al controlador aboutController.js

module.exports = router;
