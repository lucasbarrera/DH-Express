const express = require("express");
const port = process.env.PORT || 3000;
const server = express();
const path = require("path");

// config EJS
server.set("view engine", "ejs");
server.set("views", path.resolve(__dirname, "views"));

// middleware para servir archivos estaticos
server.use(express.static(path.resolve(__dirname, "public")));

server.get("/", (req, res) => {
  res.render("index");
});
server.listen(port, (req, res) => {
  console.log("servidor funcionando");
});
