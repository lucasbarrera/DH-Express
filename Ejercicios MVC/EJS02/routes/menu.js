var express = require("express");
var router = express.Router();
const menu = require("../data/menu.json");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("menu", { menu });
});

module.exports = router;
