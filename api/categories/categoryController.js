const categoryService = require("./categoryService");

exports.categoryPost = (req, res, next) => {
  let bodyData = req.body;
  console.log("bodyData", bodyData);
  categoryService
    .createCategory(bodyData)
    .then((data) => {
      res.status(201).json({ message: "Created", data });
    })
    .catch((err) => {
      next(err);
    });
};
