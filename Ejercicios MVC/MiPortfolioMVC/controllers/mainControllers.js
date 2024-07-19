const path = require("path");
const homeController = {
  gethome: (req, res) => {
    // responde con la vista de home.html
    res.sendFile(path.resolve(__dirname, "../views/home.html"));
  },
};

module.exports = homeController;
