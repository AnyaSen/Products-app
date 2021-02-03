const express = require("express");
require("./db/mongoose");
const ProductRouter = require("./routers/product-router");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(ProductRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
