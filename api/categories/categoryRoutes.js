const router = require("express").Router();
const controller = require("./categoryController");
// router.get("/", controller.categoryList);
router.route("/").post(controller.categoryPost);

module.exports = router;
