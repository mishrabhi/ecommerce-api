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

module.exports.deleteProduct = (alias) => {
  return new Promise((resolve, reject) => {
    Product.findOneAndDelete({ alias: alias })
      .then((data) => {
        resolve({ message: `Deleted Product with alias ${alias}` });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.updateProduct = (alias, bodyData) => {
  return new Promise((resolve, reject) => {
    Product.findOneAndUpdate(
      { alias: alias },
      { $set: bodyData, inc: { _v: 1 } },
      { new: true }
    )
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
