const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    success: false,
    error: err.message,
    error_stack: err.stack,
  });
};

const errorNotFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: "url not found !",
  });
};

module.exports = { errorHandler, errorNotFound };
