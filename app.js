const express = require("express");
const app = express();
const middleware = require("./middleware/appmiddleware.js");

app.use(middleware.logger);
app.use(express.json);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("API is up and running");
});

app.use("*", middleware.notFound);
app.use(middleware.handleError);

app.listen(3000, (err) => console.log("Api running on port 3000"));
