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
