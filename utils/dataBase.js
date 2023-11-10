const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });
