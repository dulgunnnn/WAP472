const express = require("express");

const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: false }));

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

const cartProducts = [
  {
    name: "Cart Product 1",
    price: "2",
    description: "Cart product test desctiption 1",
    id: 10,
    quantity: 5,
  },
  {
    name: "Cart Product 2 ",
    price: "15",
    description: "Cart product test desctiption 2",
    id: 11,
    quantity: 22,
  },
];

app.get("/", (req, res, next) => {
  res.render("product", { products: products });
});

app.get("/shoppingcart", (req, res, next) => {
  res.render("shoppingcart", {
    products: cartProducts,
  });
});

app.post("/addToCart", (req, res, next) => {
  cartProducts.push(
    products.find((item) => item.id.toString() === req.body.id)
  );
  res.redirect("/shoppingcart");
});

app.listen(3000);
