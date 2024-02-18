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

exports.deleteProduct = (req, res, next) => {
  let alias = req.params.alias;
  productService
    .deleteProduct(alias)
    .then((dt) => {
      res.status(204).json({ message: `product deleted` });
    })
    .catch((err) => {
      next(err);
    });
};

exports.updateProduct = (req, res, next) => {
  let alias = req.params.alias;
  let bodyData = req.body;
  productService
    .updateProduct(alias, bodyData)
    .then((data) => {
      res.status(200).json({ message: `Product Updated`, data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getProductByAlias = (req, res, next) => {
  let alias = req.params.alias;
  productService
    .getProductByAlias(alias)
    .then((data) => {
      if (data) {
        res.status(200).json({ message: "ok", data });
      } else {
        res.status(400).json({ message: `Product not found` });
      }
    })
    .catch((err) => {
      next(err);
    });
};
