const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, "./public");
const rutasHome = require("./routers/main.js");
const rutasAbout = require("./routers/about.js");

app.use(express.static(publicPath));

app.use("/", rutasHome); // hace peticion al manejador de rutas main.js

app.use("/about", rutasHome);

app.listen(port, () => {
  console.log("Servidor funcionando");
});
