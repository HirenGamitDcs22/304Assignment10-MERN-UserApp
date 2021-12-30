const mongooose = require("mongoose");

// User Schema
const userSchema = mongooose.Schema({
  username: String,
  password: String,
  name: String,
  age: Number,
});

const userModel = mongooose.model("userapp", userSchema, "userapp");

module.exports = userModel;