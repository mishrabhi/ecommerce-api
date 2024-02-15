const categoryService = require("./categoryService");

exports.categoryPost = (req, res, next) => {
  let bodyData = req.body;
  bodyData.alias = bodyData.title.split(" ").join("-").toLowerCase();
  categoryService
    .createCategory(bodyData)
    .then((data) => {
      res.status(201).json({ message: "Created", data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.categoryList = (req, res, next) => {
  let filter = {
    status: "active",
  };
  categoryService
    .listCategory(filter)
    .then((data) => {
      res.status(200).json({ message: `ok`, data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteCategory = (req, res, next) => {
  let alias = req.params.alias;
  categoryService
    .deleteCategory(alias)
    .then((dt) => {
      res.status(204).json({ message: "Category Deleted " });
    })
    .catch((err) => {
      next(err);
    });
};

exports.updateCategory = (req, res, next) => {
  let alias = req.params.alias;
  let bodyData = req.body;

  categoryService
    .updateCategory(alias, bodyData)
    .then((data) => {
      res.status(200).json({ message: `Blog with ${alias} updated`, data });
    })
    .catch((err) => {
      next(err);
    });
};
