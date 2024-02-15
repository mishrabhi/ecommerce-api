const express = require("express");
const app = express();
const mongoose = require("mongoose");
const middleware = require("./middleware/appmiddleware.js");

app.use(middleware.logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce-api")
  .then((dt) => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("API is up and running");
});

app.use("/api", require("./api/api.js"));

app.use("*", middleware.notFound);
app.use(middleware.handleError);

app.listen(3000, (err) => console.log("Api running on port 3000"));
