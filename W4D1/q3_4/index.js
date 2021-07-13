const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: "random salt" }));
app.use("/css", express.static(path.join(__dirname, "view/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

const products = [
  {
    name: "Book: Twenty Thousand Leagues Under the Seas",
    price: "20",
    description:
      "The novel was originally serialized from March 1869 through June 1870 in Pierre-Jules Hetzel's fortnightly periodical, the Magasin d'éducation et de récréation",
    id: 0,
    quantity: 5,
  },
  {
    name: "Mug: Marimekko ",
    price: "15",
    description:
      "Marimekko's cups and mugs available both in monochrome and colourful Marimekko patterns, such as Räsymatto, Siirtolapuutarha and Unikko.",
    id: 1,
    quantity: 10,
  },
];

app.get("/", (req, res, next) => {
  res.render("product", { products: products });
});

app.get("/shoppingcart", (req, res, next) => {
  res.render("shoppingcart", {
    products: req.session.products ? req.session.products : [],
  });
});

app.post("/addToCart", (req, res, next) => {
  if (req.session.products === undefined)
    req.session.products = [
      {
        name: req.body.name,
        price: req.body.price,
        id: req.body.id,
        quantity: 1,
      },
    ];
  else {
    let item = req.session.products.find(
      (item) => item.id.toString() === req.body.id
    );
    if (item === undefined)
      req.session.products.push({
        name: req.body.name,
        price: req.body.price,
        id: req.body.id,
        quantity: 1,
      });
    else item.quantity++;
  }

  res.redirect("/shoppingcart");
});

app.listen(3000);
