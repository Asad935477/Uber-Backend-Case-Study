const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectTODb = require("./database/db");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");

connectTODb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(express.json());
app.use("/users", userRoutes);

module.exports = app;
