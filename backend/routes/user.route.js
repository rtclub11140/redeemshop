const express = require("express");
const userRoute = express.Router();

// User Model
let UserModel = require("../models/User");

// Get User Login
userRoute.route("/login").get(function (req, res, next) {
  UserModel.findOne(
    { username: req.query.username, password: req.query.password },
    (err, users) => {
      if (err) {
        return next(err);
      } else {
        res.json({ success: true, msg: "Login Success" });
      }
    }
  );
});

// Create User
userRoute.route("/addUser").post(function (req, res, next) {
  UserModel.create(req.body, function (err, user) {
    if (err) {
      console.log(err);
      res.json({ success: false, msg: "Failed to create user" });
    } else {
      res.json({ success: true, msg: "User created" });
    }
  });
});

module.exports = userRoute;
