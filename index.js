const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const Mongoose = require("mongoose");

const PORT_NUMBER = process.env.PORT_NUMBER || 5600;
const CONNECTION_STRING = process.env.CONNECTION_STRING || null;

Mongoose.connect(CONNECTION_STRING)
  .then((response) => {
    console.log("Database connection successfull!");
  })
  .catch((err) => {
    console.log("Error while connecting DB");
  });

app.listen(PORT_NUMBER, () => {
  console.log(`APP is running on PORT :${PORT_NUMBER}`);
});
