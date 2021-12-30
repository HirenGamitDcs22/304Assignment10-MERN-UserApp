const express = require("express");
const app = express();
app.use(express.json());
const port = 4000;
const mongoose = require("mongoose");

const userModel = require("./models/user");

mongoose
  .connect("mongodb://127.0.0.1:27017/userapp")
  .then(() => console.log("mongo db connected"));

app.get("/api/", (req, res) => res.send("Hello Fullstack!"));

// Get list of all users
app.get("/api/list", async (req, res) => {
  const userList = await userModel.find({}, { username: true });

  if (userList.length === 0) {
    return res.json({ data: "no users in fullstack" });
  }

  return res.json({ data: userList });
});

// Register user
app.post("/api/registration", (req, res) => {
  const newUser = req.body;
  userModel.create(newUser);
  return res.json({ data: "registered successfully" });
});

app.listen(port, () => console.log(`server running on port 4000`));