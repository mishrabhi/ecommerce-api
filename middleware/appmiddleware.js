exports.logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

exports.notFound = (req, res, next) => {
  res.status(404).json({ message: "Request not found!" });
};

exports.handleError = (req, res, next) => {
  res.status(500).json({ message: "Something went wrong!" });
};
