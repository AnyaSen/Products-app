const express = require("express");
require("./db/mongoose");
const ProductRouter = require("./routers/product-router");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(ProductRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
