const errorNotFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: "url not found !",
  });
};

module.exports = { errorNotFound };
