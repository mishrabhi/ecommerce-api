const productService = require("./productService");

exports.productPost = (req, res, next) => {
  let bodyData = req.body;
  bodyData.alias = bodyData.title.split(" ").join("-").toLowerCase();
  productService
    .createProduct(bodyData)
    .then((data) => {
      res.status(201).json({ message: "created", data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.productList = (req, res, next) => {
  let filter = {
    status: "active",
  };
  productService
    .listProducts(filter)
    .then((data) => {
      res.status(200).json({ message: "ok", data });
    })
    .catch((err) => {
      next(err);
    });
};
