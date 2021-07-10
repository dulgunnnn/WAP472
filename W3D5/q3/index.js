const express = require("express");
const app = express();
const path = require("path");

const urlencodedParser = express.urlencoded({ extended: false });
app.use("/css", express.static(path.join(__dirname, "css")));

app.post("/result", urlencodedParser, (req, res, next) => {
  res.send(`Name: ${req.body.name}, Age: ${req.body.age}`);
});

app.use("/", (req, res, next) => {
  let hour = new Date().getHours();
  let css = hour > 6 && hour < 18 ? "/css/day.css" : "/css/night.css";

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title></title>
    <link rel="stylesheet" href="${css}">
    <meta charset="utf-8">
  </head>
  <body>
  <form action="/result" method="post">
      <label for="name">Name</label>
      <input type="text" id="name" name="name">
      <label for="age">Age</label>
      <input type="number" id="age" name="age">
      <input type="submit" value="Submit Query">
    </form> 
  </body>
  </html>  
    `);
});

app.listen(3000);
