const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/products-app-api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!");
});
