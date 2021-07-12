const express = require("express");

const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.post("/result", (req, res, next) => {
  res.render("result", {
    name: req.body.name,
    age: req.body.age,
  });
});

app.listen(3000);
