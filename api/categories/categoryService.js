const Category = require("./categorySchema");

module.exports.createCategory = (data) => {
  return new Promise((resolve, reject) => {
    const newCategory = new Category(data);
    newCategory
      .save()
      .then((dt) => {
        console.log(dt);
        resolve(dt);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.listCategory = (filter) => {
  return new Promise((resolve, reject) => {
    Category.find(filter)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.deleteCategory = (alias) => {
  return new Promise((resolve, reject) => {
    Category.findOneAndDelete({ alias: alias })
      .then((data) => {
        resolve({ message: `Deleted category with alias ${alias}` });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.updateCategory = (alias, bodyData) => {
  return new Promise((resolve, reject) => {
    Category.findOneAndUpdate(
      { alias: alias },
      { $set: bodyData, $inc: { _v: 1 } },
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
