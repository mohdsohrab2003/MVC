// Core Module
const express = require("express");
const path = require("path");

const addHomeRoutes = express.Router();
const homeController = require("../controller/home");
const rootDir = require("../utils/pathUtis");

addHomeRoutes.get("/add-home", homeController.getAddHome);
const registerHome = [];

addHomeRoutes.post("/add-home", (req, res, next) => {
  //   console.log("Registration is sucessfully for : ", req.body);
  registerHome.push(req.body);
  res.render("HomeAdded", { title: "Added Home Successly " });
});

exports.addHomeRoutes = addHomeRoutes;
exports.registerHome = registerHome;
