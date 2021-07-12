const express = require("express");
const app = express();

const arr = ["0", "1", "2"];

const urlencodedParser = express.urlencoded({ extended: false });

app.post("/add", urlencodedParser, (req, res, next) => {
  arr.push(req.body.myText);
  console.log(arr);
  res.redirect("/");
});

app.get("/add", (req, res) => {
  res.send(`
  <form action="/add" method="post">
      <label for="myText">Enter text</label>
      <input type="text" id="myText" name="myText">
      <input type="submit" value="Submit">
    </form> 
  `);
});

app.use("/", (req, res, next) => {
  let showItem = (arr) => {
    return arr.map((item) => `<li>${item}</li>`);
  };
  res.send(`
  <ul >
    ${showItem(arr)}
    </ul>
    <a href="add">Add item</a>
    `);
});

app.listen(3000);
