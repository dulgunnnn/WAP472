const express = require("express");

const path = require("path");
const app = express();

app.use("/css", express.static(path.join(__dirname, "view/css")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res) => {
  const date = new Date();
  res.render("index", {
    time: date.toTimeString(),
    hour: date.getHours(),
  });
});

app.listen(3000);
