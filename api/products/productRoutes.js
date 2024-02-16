const router = require("express").Router();

const controller = require("./productController");

router.route("/").get(controller.productList).post(controller.productPost);

module.exports = router;
