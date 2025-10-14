const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Добро пожаловать в магазин косметики!",
    status: "OK",
  });
});

app.listen(PORT, () => {
  console.log("Сервер запущен на порту " + PORT);
});
