const path = require("path"); //lo uso para resolver las rutas relativas
const aboutController = {
  getabout: (req, res) => {
    // responde con la vista de about.html
    res.sendFile(path.resolve(__dirname, "../views/about.html"));
  },
};

module.exports = aboutController;
