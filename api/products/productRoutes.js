const router = require("express").Router();

const controller = require("./productController");

router.route("/").get(controller.productList).post(controller.productPost);

router
  .route("/:alias")
  .get(controller.getProductByAlias)
  .delete(controller.deleteProduct)
  .put(controller.updateProduct);

module.exports = router;
