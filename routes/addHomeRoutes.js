// Core Module
const express = require("express");
const path = require("path");

const addHomeRoutes = express.Router();

const rootDir = require("../utils/pathUtis");

addHomeRoutes.get("/add-home", (req, res, next) => {
  res.render("AddHome", { title: "Add Home " });
});
const registerHome = [];

addHomeRoutes.post("/add-home", (req, res, next) => {
//   console.log("Registration is sucessfully for : ", req.body);
  registerHome.push(req.body)
  res.render("HomeAdded", { title: "Added Home Successly " });
});

exports.addHomeRoutes = addHomeRoutes;
exports.registerHome = registerHome;