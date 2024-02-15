const router = require("express").Router();
const controller = require("./categoryController");

// router.get("/", controller.categoryList);
router.route("/").get(controller.categoryList).post(controller.categoryPost);

router
  .route("/:alias")
  .delete(controller.deleteCategory)
  .put(controller.updateCategory);

module.exports = router;
