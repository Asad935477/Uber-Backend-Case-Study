const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First Name must be at least 3 characters long."],
    },
    lastname: {
      type: String,
      minlength: [3, "Last Name must be at least 3 characters long."],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email Must be atleast 5 charcters long."],
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
  },
});
