// Core Module
const express = require("express");
const path = require("path");

const userRoutes = express.Router();

const rootDir = require("../utils/pathUtis");

userRoutes.get("/", (req, res, next) => {
  res.render("Home");
});

exports.userRoutes = userRoutes;
