const path = require("path");
const multer = require("multer");
const crypto = require("crypto");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = path.resolve(__dirname, "../public/poster");
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const randomString = crypto.randomBytes(8).toString("hex");
    const extension = path.extname(file.originalname);
    const poster = "poster-" + randomString + extension;
    cb(null, poster);
  },
});

const fileUpload = multer({ storage });
module.exports = fileUpload;
