// Core Module
const express = require("express");
const path = require("path");

const userRoutes = express.Router();

const { registerHome } = require("./addHomeRoutes");
const rootDir = require("../utils/pathUtis");

userRoutes.get("/", (req, res, next) => {
  res.render("Home", { title: "Home Page " , registerHome: registerHome });
});

exports.userRoutes = userRoutes;
