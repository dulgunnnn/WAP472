const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/result", urlencodedParser, (req, res, next) => {
  res.send(`Name: ${req.body.name}, Age: ${req.body.age}`);
});

app.use("/", (req, res, next) => {
  res.send(`
    <form action="/result" method="post">
    <label for="name">Name</label>
    <input type="text" id="name" name="name">
    <label for="age">Age</label>
    <input type="number" id="age" name="age">
    <input type="submit" value="Submit Query">
  </form> 
    `);
});

app.listen(3000);
