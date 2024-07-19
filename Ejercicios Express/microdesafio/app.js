const express = require("express");
const path = require("node:path"); // lo uso para resolver ruta anterior al proyecto

const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT ?? 3030;

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./view/index.html"));
});
app.get("/babbage", (req, res) => {
  res.sendFile(path.resolve("./view/babbage.html"));
});
app.get("/berners-lee", (req, res) => {
  res.sendFile(path.resolve("./view/berners-lee.html"));
});
app.get("/clarke", (req, res) => {
  res.sendFile(path.resolve("./view/clarke.html"));
});
app.get("/hamilton", (req, res) => {
  res.sendFile(path.resolve("./view/hamilton.html"));
});
app.get("/hopper", (req, res) => {
  res.sendFile(path.resolve("./view/hopper.html"));
});
app.get("/lovelace", (req, res) => {
  res.sendFile(path.resolve("./view/lovelace.html"));
});
app.get("/turing", (req, res) => {
  res.sendFile(path.resolve("./view/turing.html"));
});
app.listen(3030, (err) => {
  err
    ? console.error("Server failed", err.message)
    : console.log(`server running on http://localhost:${PORT}`);
});
