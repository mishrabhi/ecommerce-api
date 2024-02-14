const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API is up and running");
});

app.listen(3000, (err) => console.log("Api running on port 3000"));
