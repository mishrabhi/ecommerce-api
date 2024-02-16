const Router = require("express").Router();

Router.use("/categories", require("./categories/categoryRoutes"));
Router.use("/products", require("./products/productRoutes"));

module.exports = Router;
