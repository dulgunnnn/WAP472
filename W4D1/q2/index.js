const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");

const urlencodedParser = express.urlencoded({ extended: false });
app.use("/css", express.static(path.join(__dirname, "view/css")));
app.use(session({ secret: "random salt" }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/output", (req, res) => {
  let hour = new Date().getHours();
  res.render("output", {
    name: req.session.user.name,
    age: req.session.user.age,
    css: hour > 6 && hour < 18 ? "/css/day.css" : "/css/night.css",
  });
});

app.post("/result", urlencodedParser, (req, res, next) => {
  req.session.user = {
    name: req.body.name,
    age: req.body.age,
  };

  res.redirect("/output");
});

app.get("/", (req, res, next) => {
  let hour = new Date().getHours();

  res.render("index", {
    css: hour > 6 && hour < 18 ? "/css/day.css" : "/css/night.css",
  });
});

app.listen(3000);
