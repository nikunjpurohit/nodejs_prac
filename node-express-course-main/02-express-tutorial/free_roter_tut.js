const express = require("express");

const app = express();
const path = require("path");
const { products, people } = require("./data.js");

app.use(express.static("./navbar-app"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get("/api/products/:productId", (req, res) => {
  console.log(req.params);
  const { productId } = req.params;

  const singleProduct = products.find(
    (products) => products.id == Number(productId)
  );
  if (!singleProduct) {
    return res.status(404).send("Product doesnt exist");
  }
  res.json(singleProduct);
});

app.get("/api/products/productId/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello World");
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);

  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).json({ sucess: true, data: [] });
    }
    res.status(200).json(sortedProducts);
  }
});

app.get("/people", (req, res) => {
  let sortedProducts = [...products];
  res.json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
