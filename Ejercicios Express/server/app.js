const express = require("express");
const path = require("node:path"); // lo uso para resolver ruta anterior al proyecto
const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  //   res.send("Hola mundo y alrededores");
  res.sendFile(path.resolve("./views/index.html"));
});
app.listen(3000, (err) => {
  err
    ? console.error("Server failed", err.message)
    : console.log(`server running on http://localhost:${PORT}`);
});

// res.sendFile(path.join(__dirname,'/'))
