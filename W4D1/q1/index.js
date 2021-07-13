const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.post("/addCookie", (req, res, next) => {
  res.cookie(req.body.key, req.body.value);
  res.redirect("/");
});

app.post("/remove", (req, res, next) => {
  if (req.cookies.testKey) res.clearCookie("testKey");
  res.redirect("/");
});

app.listen(3000);
