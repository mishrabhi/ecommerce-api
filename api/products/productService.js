const Product = require("./productSchema");

module.exports.createProduct = (data) => {
  return new Promise((resolve, reject) => {
    const newProduct = new Product(data);
    newProduct
      .save()
      .then((dt) => {
        resolve(dt);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.listProducts = (filter) => {
  return new Promise((resolve, reject) => {
    Product.find(filter)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
