const express = require("express");
const path = require("path");

const { userRoutes } = require("./routes/userRoutes");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(userRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`);
});
