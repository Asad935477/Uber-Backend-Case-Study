const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !lastname || !email || !password) {
    throw new Error("All Fields are required");
  }
  const user = userModel.createUser({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};