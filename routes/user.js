const express = require("express");

const router = express.Router();
const multer = require("multer");
const { storage } = require("../utils/cloudinaryConfig");
const upload = multer({ storage });

const {
  addProduct,
  getProducts,
  editProduct,
  deleteProduct,
} = require("../controller/userController");

router.post("/addProduct", upload.single("image"), addProduct);
router.get("/getProducts", getProducts);
router.post("/editProduct", upload.single("image"), editProduct);
router.post("/deleteProduct", deleteProduct);

module.exports = router;
