const express = require("express");
const app = express();

app.use("/", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;

  if (!name) name = "person";
  if (!age) age = "unknown";

  res.send(`Welcome ${name}, age: ${age}`);
});
app.listen(3000);
