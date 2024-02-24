const Router = require("express").Router();

Router.use("/categories", require("./categories/categoryRoutes"));
Router.use("/products", require("./products/productRoutes"));
Router.use("/users", require("./user/userRoutes"));

module.exports = Router;
