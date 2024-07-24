var express = require("express");
const fs = require("fs");
const path = require("path");
var router = express.Router();
const menupath = path.join(__dirname, "../data/menu.json");
const menu = JSON.parse(fs.readFileSync(menupath, "utf-8"));
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("menu", { menu });
});
router.get("/detail/:id", (req, res) => {
  const { id } = req.params;
  const m = menu.filter((men) => {
    men.id === id;
  });
  res.render("detalleMenu", { m });
});

module.exports = router;
