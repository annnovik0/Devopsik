const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Cosmetics Shop",
    status: "OK",
  });
});

// API for cosmetic products
app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Face Cream", price: 1500, category: "Care" },
    { id: 2, name: "Foundation", price: 1200, category: "Makeup" },
    { id: 3, name: "Mascara", price: 890, category: "Makeup" },
    { id: 4, name: "Cleanser", price: 670, category: "Care" },
    { id: 5, name: "Lipstick", price: 750, category: "Makeup" },
  ];
  res.json(products);
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
