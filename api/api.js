const Router = require("express").Router();

Router.use("/categories", require("./categories/categoryRoutes"));

module.exports = Router;
