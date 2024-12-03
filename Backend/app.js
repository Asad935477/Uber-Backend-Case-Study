const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectTODb = require("./database/db");

connectTODb();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
